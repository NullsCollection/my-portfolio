import type { Metadata, Viewport } from "next";
import "../assets/styles/globals.css";
import "../assets/styles/style.css";
import "../assets/styles/base.css";

export const metadata: Metadata = {
  title: {
    default:
      "Raffy Francisco | Nullz Collection | Developer & Graphic Designer",
    template: "%s | Raffy Francisco Portfolio",
  },
  description:
    "Professional Full-Stack Developer and Graphic Designer specializing in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, responsive websites and mobile applications. Available for freelance projects and full-time opportunities worldwide.",
  keywords: [
    "Raffy Francisco",
    "Full-Stack Developer",
    "Web Developer",
    "Graphic Designer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Portfolio",
    "Freelance Developer",
    "Web Design",
    "Mobile App Development",
    "SEO Optimization",
    "Responsive Design",
    "Modern Web Technologies",
  ],
  authors: [
    { name: "Raffy Francisco", url: "https://raffy-francisco.vercel.app/" },
  ],
  creator: "Raffy Francisco",
  publisher: "Raffy Francisco",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://raffy-francisco.vercel.app/",
    title: "Raffy Francisco | Developer & Graphic Designer",
    description:
      "Professional Developer and Graphic Designer specializing in React, Next.js, TypeScript, and modern web technologies. Creating beautiful, responsive websites and mobile applications.",
    siteName: "Raffy Francisco Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Raffy Francisco - Full-Stack Developer & Graphic Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raffy Francisco | Full-Stack Developer & Graphic Designer",
    description:
      "Professional Full-Stack Developer and Graphic Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
    images: ["/og-image.jpg"],
    creator: "@raffyfrancisco",
  },
  alternates: {
    canonical: "https://raffy-francisco.vercel.app/",
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Raffy Francisco",
  jobTitle: "Full-Stack Developer & Graphic Designer",
  description:
    "Professional Developer and Graphic Designer specializing in React, Next.js, TypeScript, and modern web technologies.",
  url: "https://raffy-francisco.vercel.app/",
  email: "raffy7792@gmail.com",
  telephone: "+63 960 072 3886",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Philippines",
  },
  sameAs: [
    "https://www.behance.net/nullzvectcollection",
    "https://www.linkedin.com/in/raffy-francisco-50607b325/",
    "https://github.com/raffyfrancisco",
  ],
  knowsAbout: [
    "Web Development",
    "Graphic Design",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "UI/UX Design",
    "Mobile App Development",
    "SEO Optimization",
    "Responsive Design",
  ],
  offers: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Web Development & Graphic Design Services",
      description:
        "Professional web development and graphic design services including website creation, mobile app development, UI/UX design, and SEO optimization.",
    },
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
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://formspree.io" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#01c2b2" />
        <meta name="msapplication-TileColor" content="#01c2b2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Favicon and Icons */}
        <link rel="icon" href="/assets/icon/NC.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
