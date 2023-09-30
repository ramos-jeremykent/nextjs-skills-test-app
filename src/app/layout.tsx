import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filta Skills Test App",
  description: "Skills test created by Jeremy Ramos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
