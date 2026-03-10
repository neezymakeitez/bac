import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BUILDERS @ CAL",
  description: "BUILDERS @ CAL",
  icons: {
    icon: "/bac_logo.svg",
    shortcut: "/bac_logo.svg",
    apple: "/bac_logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
