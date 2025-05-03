import type { Metadata } from "next";
import "./globals.css";
import { anton, poppins } from "./font";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Fauzan Habib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.ico" type="image/x-icon"/>
      </Head>
      <body className={`${anton.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
