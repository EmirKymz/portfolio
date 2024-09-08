import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var storageKey = 'theme';
                var theme = localStorage.getItem(storageKey);
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (!theme) {
                  theme = prefersDark ? 'dark' : 'light';
                  localStorage.setItem(storageKey, theme);
                }

                document.body.classList.add(theme);
              })();
            `
          }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument