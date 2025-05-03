import type { Metadata } from "next";
import "./globals.css";
import { anton, poppins } from "./font";

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
      <body
          className={`${anton.variable} ${poppins.variable}`}       >
        {children}
      </body>
    </html>
  );
}
