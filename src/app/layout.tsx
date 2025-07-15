import type { Metadata } from "next";
import "../assets/styles/globals.css";
import "../assets/styles/base.css";

export const metadata: Metadata = {
  title: "Raffy Francisco | Portfolio",
  description:
    "Professional Web Developer and Graphic Designer specializing in modern technologies. Available for freelance and full-time opportunities worldwide.",
  keywords:
    "web developer, graphic designer, portfolio, freelance, full-time, modern technologies, Next.js, TypeScript, React",
  authors: [{ name: "Raffy Francisco" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Raffy Francisco - Portfolio",
    description:
      "Professional Web Developer and Graphic Designer specializing in modern technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raffy Francisco - Portfolio",
    description:
      "Professional Web Developer and Graphic Designer specializing in modern technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
