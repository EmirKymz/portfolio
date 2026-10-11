"""Convert the design canvas artboard (design/Main.dc.html) into React source.

Outputs:
  src/styles.css  - the artboard's <helmet> styles
  src/ek.js       - the EK content/data module
  src/App.jsx     - the component logic plus JSX generated from the template

Usage: python tools/convert_dc.py
"""
import json
import os
import re
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'design', 'Main.dc.html')
OUT = os.path.join(ROOT, 'src')

VOID = {'input', 'br', 'img', 'meta', 'link', 'hr'}
ATTR = {
    'class': 'className', 'for': 'htmlFor', 'maxlength': 'maxLength', 'autocomplete': 'autoComplete',
    'autocapitalize': 'autoCapitalize', 'autocorrect': 'autoCorrect', 'spellcheck': 'spellCheck',
    'enterkeyhint': 'enterKeyHint', 'tabindex': 'tabIndex', 'readonly': 'readOnly', 'crossorigin': 'crossOrigin',
    'viewbox': 'viewBox', 'stroke-width': 'strokeWidth', 'stroke-linecap': 'strokeLinecap',
    'stroke-linejoin': 'strokeLinejoin', 'fill-rule': 'fillRule', 'clip-rule': 'clipRule',
}
EVENTS = ['onClick', 'onKeyDown', 'onKeyUp', 'onChange', 'onPointerDown', 'onPointerUp', 'onPointerLeave',
          'onPointerMove', 'onPointerCancel', 'onMouseMove', 'onTouchMove', 'onTouchStart']
for e in EVENTS:
    ATTR[e.lower()] = e
HOLE = re.compile(r'\{\{\s*([^}]+?)\s*\}\}')


class Node:
    def __init__(self, tag, attrs):
        self.tag, self.attrs, self.children = tag, attrs, []


class Parser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node('#root', [])
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        n = Node(tag, attrs)
        self.stack[-1].children.append(n)
        if tag not in VOID:
            self.stack.append(n)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs))

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, 0, -1):
            if self.stack[i].tag == tag:
                del self.stack[i:]
                return

    def handle_data(self, data):
        self.stack[-1].children.append(data)


def expr(path, scope):
    path = path.strip()
    if path in ('true', 'false') or re.fullmatch(r'-?\d+(\.\d+)?', path):
        return path
    head = path.split('.')[0]
    if head == '$index':
        return scope['idx'][-1] + path[len('$index'):]
    if head in scope['vars']:
        return path
    return 'v.' + path


def js_value(raw, scope):
    """Return a JS expression for an attribute or style value."""
    m = HOLE.fullmatch(raw.strip())
    if m:
        return expr(m.group(1), scope)
    if HOLE.search(raw):
        out, pos = '`', 0
        for m in HOLE.finditer(raw):
            out += raw[pos:m.start()].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')
            out += '${' + expr(m.group(1), scope) + '}'
            pos = m.end()
        out += raw[pos:].replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${') + '`'
        return out
    return json.dumps(raw, ensure_ascii=False)


def split_style(s):
    parts, depth, cur = [], 0, ''
    for ch in s:
        if ch == '(':
            depth += 1
        elif ch == ')':
            depth -= 1
        if ch == ';' and depth == 0:
            parts.append(cur)
            cur = ''
        else:
            cur += ch
    parts.append(cur)
    return [p.strip() for p in parts if p.strip()]


def camel(prop):
    if prop.startswith('--'):
        return json.dumps(prop)
    return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), prop)


def style_obj(s, scope):
    items = []
    for decl in split_style(s):
        k, _, val = decl.partition(':')
        items.append('%s: %s' % (camel(k.strip()), js_value(val.strip(), scope)))
    return '{{ ' + ', '.join(items) + ' }}'


def attrs_jsx(node, scope):
    out = []
    for name, val in node.attrs:
        if name.startswith('hint-'):
            continue
        if val is None:
            out.append(ATTR.get(name, name))
            continue
        if name == 'style':
            out.append('style=' + style_obj(val, scope))
            continue
        key = ATTR.get(name, name)
        v = js_value(val, scope)
        out.append('%s=%s' % (key, v if v.startswith('"') else '{' + v + '}'))
    return (' ' + ' '.join(out)) if out else ''


def text_jsx(t, scope):
    if not t.strip() and '\n' in t:
        return ''
    t = re.sub(r'\s*\n\s*', ' ', t)
    if not t:
        return ''
    out, pos = [], 0
    for m in HOLE.finditer(t):
        if m.start() > pos:
            out.append('{%s}' % json.dumps(t[pos:m.start()], ensure_ascii=False))
        out.append('{%s}' % expr(m.group(1), scope))
        pos = m.end()
    if pos < len(t):
        out.append('{%s}' % json.dumps(t[pos:], ensure_ascii=False))
    return ''.join(out)


def emit(node, scope, ind):
    pad = '  ' * ind
    if isinstance(node, str):
        t = text_jsx(node, scope)
        return [pad + t] if t else []
    a = dict(node.attrs)
    if node.tag == 'sc-if':
        cond = js_value(a['value'], scope)
        body = [l for c in node.children for l in emit(c, scope, ind + 2)]
        return [pad + '{(%s) && (' % cond, pad + '  <>'] + body + [pad + '  </>', pad + ')}']
    if node.tag == 'sc-for':
        lst = js_value(a['list'], scope)
        var = a.get('as', 'item')
        idx = 'i%d' % len(scope['idx'])
        inner = {'vars': scope['vars'] | {var}, 'idx': scope['idx'] + [idx]}
        body = [l for c in node.children for l in emit(c, inner, ind + 2)]
        return [pad + '{(%s || []).map((%s, %s) => (' % (lst, var, idx), pad + '  <React.Fragment key={%s}>' % idx] + body + [pad + '  </React.Fragment>', pad + '))}']
    open_ = '<%s%s' % (node.tag, attrs_jsx(node, scope))
    kids = [l for c in node.children for l in emit(c, scope, ind + 1)]
    if not kids:
        return [pad + open_ + ' />']
    return [pad + open_ + '>'] + kids + [pad + '</%s>' % node.tag]


def main():
    html = open(SRC, encoding='utf-8').read()
    helmet = html[html.index('<helmet>'):html.index('</helmet>')]
    css = helmet[helmet.index('<style>') + 7:helmet.index('</style>')].strip()
    body = html[html.index('</helmet>') + len('</helmet>'):html.index('</x-dc>')]
    script = html[html.index('data-dc-script'):]
    script = script[script.index('>') + 1:script.index('</script>')]

    p = Parser()
    p.feed(body)
    roots = [c for c in p.root.children if not isinstance(c, str)]
    assert len(roots) == 1, 'expected one root element'
    jsx = '\n'.join(emit(roots[0], {'vars': set(), 'idx': []}, 3))

    ek_end = script.index('class Component extends DCLogic')
    ek_src = script[:ek_end].strip()
    cls = script[ek_end:].strip()
    cls = cls.replace('class Component extends DCLogic {', 'export default class App extends React.Component {', 1)
    assert cls.endswith('}')
    cls = cls[:-1].rstrip() + '\n\n  render() {\n    const v = this.renderVals();\n    return (\n' + jsx + '\n    );\n  }\n}\n'

    os.makedirs(OUT, exist_ok=True)
    head = '// Generated by tools/convert_dc.py from design/Main.dc.html. Edit the design file and re-run.\n'
    open(os.path.join(OUT, 'styles.css'), 'w', encoding='utf-8', newline='\n').write('/* ' + head[3:].strip() + ' */\n' + css + '\n')
    open(os.path.join(OUT, 'ek.js'), 'w', encoding='utf-8', newline='\n').write(head + ek_src.replace('var EK =', 'const EK =', 1) + '\n\nexport default EK;\n')
    open(os.path.join(OUT, 'App.jsx'), 'w', encoding='utf-8', newline='\n').write(head + "import React from 'react';\nimport EK from './ek.js';\n\n" + cls)
    print('wrote src/styles.css, src/ek.js, src/App.jsx')


if __name__ == '__main__':
    main()
