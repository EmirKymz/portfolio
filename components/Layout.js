import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { useTheme } from "next-themes";

const Layout = ({ title, description, children }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // Sayfa yüklendiğinde tema sınıfını body'e ekle
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:site_name" content="My Portfolio" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`min-h-screen antialiased font-montserrat transition-colors duration-200 ease-in-out`}>
        <Header />
        <main className="px-4 py-8">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;