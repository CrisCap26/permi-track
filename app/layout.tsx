import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Incidencias RH",
  description: "Incidencias RH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark text-foreground bg-background">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-5`}
      >
        <Providers>
          <h1 className="mb-7 text-xl text-center">Incidencias RH</h1>
          {children}
        </Providers>
      </body>
    </html>
  );
}
