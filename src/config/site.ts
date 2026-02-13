/**
 * Site configuration
 * Contains metadata, SEO information, and author details
 */

export const siteConfig = {
  name: "Raffy Francisco",
  brandName: "NuLLzCollection",
  title: {
    default:
      "Raffy Francisco | Nullz Collection | Developer & Graphic Designer",
    template: "%s | Raffy Francisco Portfolio",
  },
  description:
    "Frontend Developer and Graphic Designer specializing in React, Next.js, TypeScript, Tailwind, and modern UI/UX design. I create scalable, responsive web applications and visually polished digital experiences, combining strong frontend engineering with professional design skills. Available for remote freelance and full-time opportunities worldwide.",
  url: "https://raffy-francisco.vercel.app/",
  ogImage: "/og-image.jpg",
  keywords: [
    "Raffy Francisco",
    "Frontend Developer",
    "Web Developer",
    "Graphic Designer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Tailwind",
    "UI/UX Designer",
    "Portfolio",
    "Freelance Developer",
    "Web Design",
    "Mobile App Development",
    "SEO Optimization",
    "Responsive Design",
    "Modern Web Technologies",
  ] as string[],
  author: {
    name: "Raffy Francisco",
    email: "raffy7792@gmail.com",
    phone: "+63 960 072 3886",
    location: "Philippines",
    jobTitle: "Full-Stack Developer & Graphic Designer",
  },
  themeColor: "#01c2b2",
} as const;

export const structuredData = {
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
