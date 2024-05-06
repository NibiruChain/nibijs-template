import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nibiru | Template App",
  description: "Empty Nibi JS Template App",
  metadataBase: new URL("https://nibiru.fi/"),
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta name="description" content="Empty Nibi JS Template App" />
      </Head>
      <main className={inter.className}>{children}</main>
    </>
  );
}
