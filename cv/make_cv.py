import os, sys
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, ListFlowable, ListItem

F = 'C:/Windows/Fonts/'
pdfmetrics.registerFont(TTFont('Mono', F + 'consola.ttf'))
pdfmetrics.registerFont(TTFont('Mono-Bold', F + 'consolab.ttf'))
pdfmetrics.registerFont(TTFont('Mono-Italic', F + 'consolai.ttf'))
pdfmetrics.registerFont(TTFont('Mono-BoldItalic', F + 'consolaz.ttf'))
addMapping('Mono', 0, 0, 'Mono'); addMapping('Mono', 1, 0, 'Mono-Bold'); addMapping('Mono', 0, 1, 'Mono-Italic'); addMapping('Mono', 1, 1, 'Mono-BoldItalic')

BLUE = colors.HexColor('#2f5d8a')
INK = colors.HexColor('#1f2328')
MUTED = colors.HexColor('#57606a')
BAR = colors.HexColor('#ececec')

st = {
    'name': ParagraphStyle('name', fontName='Mono-Bold', fontSize=22, leading=26, textColor=BLUE),
    'contact': ParagraphStyle('contact', fontName='Mono', fontSize=8.6, leading=12.5, textColor=INK),
    'h': ParagraphStyle('h', fontName='Mono-Bold', fontSize=11, leading=14, alignment=TA_CENTER, textColor=INK),
    'body': ParagraphStyle('body', fontName='Mono', fontSize=8.8, leading=12.2, textColor=INK),
    'org': ParagraphStyle('org', fontName='Mono-Bold', fontSize=9.4, leading=12.5, textColor=INK),
    'date': ParagraphStyle('date', fontName='Mono', fontSize=8.8, leading=12.5, textColor=BLUE, alignment=TA_RIGHT),
    'role': ParagraphStyle('role', fontName='Mono-Italic', fontSize=8.8, leading=12, textColor=INK),
    'bullet': ParagraphStyle('bullet', fontName='Mono', fontSize=8.6, leading=11.6, textColor=INK),
}

def link(url, label):
    return '<a href="%s" color="#1f2328">%s</a>' % (url, label)

C = {
  'en': {
    'file': 'Emircan-Kaymaz-CV-EN.pdf',
    'title': 'Software Developer | DevOps',
    'loc': 'Gebze, Kocaeli', 'sec': ['Profile', 'Experience', 'Education', 'Skills', 'Languages', 'Certificates', 'Projects'],
    'profile': 'Self-driven and solution-oriented software developer with a solid background in C, C++ and Python. Skilled in containerization, Linux environments and modern DevOps tools including Docker and Kubernetes. Currently building middleware for HGW (home gateway) devices for Türk Telekom. Completed core training and advanced system-level projects at Ecole 42. Eager to apply problem-solving and teamwork skills to real-world, scalable software systems.',
    'exp': [
      ('Retfox', 'Assistant Software Systems Specialist · Türk Telekom Modem Team', '12/2025 – Present', 'Türkiye', [
        'Developing <b>middleware applications</b> for <b>HGW (home gateway)</b> devices used by Türk Telekom.',
        'Device management and <b>activation flows</b> run through the systems our team builds.',
        'Working with <b>Groovy</b>, <b>Camunda</b> (BPMN workflows) and <b>SQL</b>.']),
      ('HepsiJet', 'DevOps Intern', '10/2024 – 10/2025', 'Istanbul, Türkiye', [
        'Contributed to infrastructure improvements using <b>Jenkins</b>, <b>Docker</b>, <b>Kubernetes</b>, <b>Elasticsearch</b> and <b>Kibana</b>.',
        'Developed and automated <b>daily performance reports</b> for operational units using Jenkins pipelines and SMTP integration.',
        'Built an in-house <b>DNS management application</b> as an alternative to the limited Windows DNS Manager, deepening my understanding of DNS architecture and zone scopes.',
        'Supported the DevOps team in debugging, log analysis and container orchestration across staging and production.']),
      ('Ecole 42', 'Tutor', '02/2023 – 04/2023', 'Kocaeli, Türkiye', [
        "Mentored newly enrolled students as they adapted to Ecole 42's project-based learning system.",
        'Maintained clear communication with students for a smooth onboarding.',
        'Supervised exams and practical assessments to maintain academic integrity.']),
    ],
    'edu': ('Ecole 42', 'Software Engineering', [('Advanced Curriculum', '2024 – Present'), ('Common Core', '2021 – 2024')]),
    'skills': [('Languages', 'C, C++, C#, Python, Bash, Groovy, COBOL'), ('DevOps &amp; Tools', 'Docker, Kubernetes, K3s, Jenkins, Argo CD, Vagrant, Nginx, Linux'), ('Observability', 'Elasticsearch, Kibana'), ('Workflow &amp; Data', 'Camunda, SQL, PostgreSQL'), ('Others', 'Git, REST APIs, JWT, 2FA, Django, Next.js')],
    'langs': '<b>Turkish</b> — Native &nbsp;&nbsp; <b>English</b> — B1',
    'certs': ['CyberOps Associate — Cisco', 'Introduction to Cybersecurity — Cisco', 'COBOL Programming with VSCode — IBM'],
    'projects': [
      ('Transcendence', 'https://github.com/EmirKymz/Transcendence', 'Full-Stack Web App | Django, JavaScript, Docker, PostgreSQL', [
        'Collaborated with a <b>5-person team</b> on a multiplayer Pong platform with <b>2FA-secured login</b>, <b>chat rooms</b> and <b>user profiles</b>.',
        'Worked on <b>backend API development and deployment</b> with Django REST Framework and Docker for a modular service architecture.']),
      ('Inception of Things', None, 'Infrastructure | K3s, Vagrant, Nginx Ingress, Argo CD', [
        'Built a lightweight <b>Kubernetes (K3s)</b> cluster with <b>Vagrant</b>, provisioning separate VMs for server and agents.',
        'Deployed three containerized web apps behind <b>Nginx Ingress</b>, with a <b>GitOps CI/CD pipeline using Argo CD</b> syncing from GitHub.']),
      ('Inception', 'https://github.com/EmirKymz/Inception', 'System Administration | Docker', [
        'Built isolated Docker services (Nginx, WordPress, MariaDB) inside a Linux VM; images, volumes and orchestration.']),
      ('ft_irc', 'https://github.com/EmirKymz/IRC', 'Internet Relay Chat | C++', [
        'Built a custom IRC server for HexChat clients: commands, message routing, socket programming and real-time parsing.']),
      ('Personal Portfolio Website', 'https://github.com/EmirKymz/portfolio', 'Portfolio | Next.js, Docker, Nginx, Cloudflare', [
        'Self-hosted portfolio with <b>Next.js</b>, <b>Docker</b> and <b>Nginx</b> behind a <b>Cloudflare Tunnel</b>, with DNS/HTTPS via Cloudflare.']),
    ],
    'private': ' (private repo)',
  },
  'tr': {
    'file': 'Emircan-Kaymaz-CV-TR.pdf',
    'title': 'Yazılım Geliştirici | DevOps',
    'loc': 'Gebze, Kocaeli', 'sec': ['Profil', 'Deneyim', 'Eğitim', 'Yetenekler', 'Diller', 'Sertifikalar', 'Projeler'],
    'profile': "C, C++ ve Python temeli sağlam, kendi kendine öğrenen ve çözüm odaklı bir yazılım geliştiriciyim. Container teknolojileri, Linux ortamları ve Docker, Kubernetes gibi modern DevOps araçlarında deneyimliyim. Şu an Türk Telekom için HGW (ev ağ geçidi) cihazlarına yönelik ara katman uygulamaları geliştiriyorum. Ecole 42'de temel eğitimi ve ileri seviye sistem projelerini tamamladım. Problem çözme ve takım çalışması becerilerimi gerçek dünyadaki, ölçeklenebilir sistemlerde kullanmak istiyorum.",
    'exp': [
      ('Retfox', 'Yazılım Sistem Uzman Yardımcısı · Türk Telekom Modem Ekibi', '12/2025 – Günümüz', 'Türkiye', [
        'Türk Telekom <b>HGW (ev ağ geçidi)</b> cihazları için <b>ara katman uygulamaları</b> geliştiriyorum.',
        'Cihaz yönetimi ve <b>aktivasyon adımları</b> ekibimizin geliştirdiği sistemler üzerinden yürüyor.',
        '<b>Groovy</b>, <b>Camunda</b> (BPMN iş akışları) ve <b>SQL</b> ile çalışıyorum.']),
      ('HepsiJet', 'DevOps Stajyeri', '10/2024 – 10/2025', 'İstanbul, Türkiye', [
        '<b>Jenkins</b>, <b>Docker</b>, <b>Kubernetes</b>, <b>Elasticsearch</b> ve <b>Kibana</b> ile altyapı iyileştirmelerine katkı verdim.',
        "Operasyon birimleri için <b>günlük performans raporlarını</b> Jenkins pipeline'ları ve SMTP entegrasyonuyla otomatikleştirdim.",
        "Kısıtlı Windows DNS Manager'a alternatif, şirket içi bir <b>DNS yönetim uygulaması</b> geliştirdim; DNS mimarisi ve zone scope konularında derinleştim.",
        'Staging ve production ortamlarında hata ayıklama, log analizi ve container orkestrasyonunda DevOps ekibine destek oldum.']),
      ('Ecole 42', 'Tutor', '02/2023 – 04/2023', 'Kocaeli, Türkiye', [
        "Yeni öğrencilerin Ecole 42'nin proje tabanlı öğrenme sistemine uyum sağlamasına mentorluk yaptım.",
        'Öğrencilerle açık iletişim kurarak sorunsuz bir başlangıç süreci sağladım.',
        'Sınavları ve pratik değerlendirmeleri denetledim.']),
    ],
    'edu': ('Ecole 42', 'Yazılım Mühendisliği', [('İleri Müfredat', '2024 – Günümüz'), ('Common Core', '2021 – 2024')]),
    'skills': [('Diller', 'C, C++, C#, Python, Bash, Groovy, COBOL'), ('DevOps &amp; Araçlar', 'Docker, Kubernetes, K3s, Jenkins, Argo CD, Vagrant, Nginx, Linux'), ('Gözlemlenebilirlik', 'Elasticsearch, Kibana'), ('İş Akışı &amp; Veri', 'Camunda, SQL, PostgreSQL'), ('Diğer', 'Git, REST API, JWT, 2FA, Django, Next.js')],
    'langs': '<b>Türkçe</b> — Ana dil &nbsp;&nbsp; <b>İngilizce</b> — B1',
    'certs': ['CyberOps Associate — Cisco', 'Introduction to Cybersecurity — Cisco', 'COBOL Programming with VSCode — IBM'],
    'projects': [
      ('Transcendence', 'https://github.com/EmirKymz/Transcendence', 'Full-Stack Web Uygulaması | Django, JavaScript, Docker, PostgreSQL', [
        '<b>5 kişilik ekiple</b>, <b>2FA korumalı giriş</b>, <b>sohbet odaları</b> ve <b>kullanıcı profilleri</b> olan çok oyunculu bir Pong platformu geliştirdik.',
        'Django REST Framework ve Docker ile <b>backend API geliştirme ve dağıtımı</b> üzerinde çalıştım.']),
      ('Inception of Things', None, 'Altyapı | K3s, Vagrant, Nginx Ingress, Argo CD', [
        '<b>Vagrant</b> ile sunucu ve agent VM\'leri olan hafif bir <b>Kubernetes (K3s)</b> kümesi kurdum.',
        "<b>Nginx Ingress</b> arkasında üç container uygulama ve GitHub'dan senkronlanan <b>Argo CD tabanlı GitOps CI/CD</b> hattı oluşturdum."]),
      ('Inception', 'https://github.com/EmirKymz/Inception', 'Sistem Yönetimi | Docker', [
        "Linux VM içinde izole Docker servisleri (Nginx, WordPress, MariaDB); image, volume ve orkestrasyon."]),
      ('ft_irc', 'https://github.com/EmirKymz/IRC', 'Internet Relay Chat | C++', [
        'HexChat istemcileriyle çalışan IRC sunucusu: komut işleme, mesaj yönlendirme, soket programlama ve gerçek zamanlı ayrıştırma.']),
      ('Kişisel Portfolyo Sitesi', 'https://github.com/EmirKymz/portfolio', 'Portfolyo | Next.js, Docker, Nginx, Cloudflare', [
        '<b>Next.js</b>, <b>Docker</b> ve <b>Nginx</b> ile kendi sunucumda, <b>Cloudflare Tunnel</b> arkasında yayınlanan portfolyo; DNS/HTTPS Cloudflare ile.']),
    ],
    'private': ' (private repo)',
  }
}

def section(title, W):
    t = Table([[Paragraph(title, st['h'])]], colWidths=[W])
    t.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), BAR), ('TOPPADDING', (0, 0), (-1, -1), 3), ('BOTTOMPADDING', (0, 0), (-1, -1), 4)]))
    return [Spacer(1, 7), t, Spacer(1, 5)]

def bullets(items):
    return ListFlowable([ListItem(Paragraph(b, st['bullet']), leftIndent=12, value='-') for b in items], bulletType='bullet', start='-', leftIndent=12, bulletFontName='Mono', bulletFontSize=8.6)

def build(lang, out_dir):
    c = C[lang]
    path = os.path.join(out_dir, c['file'])
    doc = SimpleDocTemplate(path, pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm, topMargin=14 * mm, bottomMargin=14 * mm,
                            title='Emircan Kaymaz — CV', author='Emircan Kaymaz', subject=c['title'])
    W = A4[0] - 32 * mm
    S = []
    S.append(Paragraph('Emircan KAYMAZ &nbsp;<font name="Mono-Italic" size="15" color="#2f5d8a">%s</font>' % c['title'], st['name']))
    S.append(Spacer(1, 4))
    S.append(Paragraph(' &nbsp;·&nbsp; '.join([link('https://emircankaymaz.com', 'emircankaymaz.com'), link('mailto:16emirkymz@gmail.com', '16emirkymz@gmail.com'), c['loc']]), st['contact']))
    S.append(Paragraph(' &nbsp;·&nbsp; '.join([link('https://www.linkedin.com/in/ekaymaz/', 'LinkedIn: ekaymaz'), link('https://github.com/EmirKymz', 'GitHub: EmirKymz'), link('https://www.codingame.com/profile/f48f29962fa24ac52667946dd7b1bafc6186484', 'CodinGame: EmirKymz')]), st['contact']))
    sec = c['sec']
    S += section(sec[0], W)
    S.append(Paragraph(c['profile'], st['body']))
    S += section(sec[1], W)
    for org, role, date, loc, bl in c['exp']:
        head = Table([[Paragraph(org, st['org']), Paragraph('%s &nbsp;<font color="#57606a">|&nbsp; %s</font>' % (date, loc), st['date'])]], colWidths=[W * 0.5, W * 0.5])
        head.setStyle(TableStyle([('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0), ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0)]))
        S.append(KeepTogether([head, Paragraph(role, st['role']), bullets(bl), Spacer(1, 6)]))
    S += section(sec[2], W)
    org, deg, rows = c['edu']
    S.append(Paragraph(org, st['org']))
    S.append(Paragraph(deg, st['role']))
    for k, v in rows:
        S.append(Paragraph('&nbsp;&nbsp;<b>%s</b>: %s' % (k, v), st['body']))
    S += section(sec[3], W)
    for k, v in c['skills']:
        S.append(Paragraph('<b>%s:</b> %s' % (k, v), st['body']))
        S.append(Spacer(1, 2))
    S += section(sec[4], W)
    S.append(Paragraph(c['langs'], st['body']))
    S += section(sec[5], W)
    S.append(bullets(c['certs']))
    S += section(sec[6], W)
    for name, url, sub, bl in c['projects']:
        title = link(url, name) if url else name + '<font color="#57606a">%s</font>' % c['private']
        S.append(KeepTogether([Paragraph(title, st['org']), Paragraph(sub, st['role']), bullets(bl), Spacer(1, 6)]))
    doc.build(S)
    return path

if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else os.path.dirname(os.path.abspath(__file__))
    os.makedirs(out, exist_ok=True)
    for lg in ('en', 'tr'):
        print(build(lg, out))
