import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav style={{ margin: "1em auto", maxWidth: "calc(100% - 2em)" }}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </header>
    <main style={{ margin: "1em auto", maxWidth: "calc(100% - 2em)" }}>
      {children}
    </main>
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </>
);

export default Layout;
