import type { Metadata } from "next";
import "./globals.css";
import { anton, spaceGrotesk } from "./font";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Fauzan Habib — Full-Stack Developer",
  description: "Full-Stack Developer, Cloud Architect & AI Integration Engineer based in India",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${anton.variable} ${spaceGrotesk.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
