/**
 * Social media configuration
 * Contains social media links and contact information
 */

export const socialLinks = {
  behance: {
    url: "https://www.behance.net/nullzvectcollection",
    label: "Visit Behance Profile",
    icon: "lineicons:behance",
    mobileIcon: "tdesign:logo-behance-filled",
  },
  linkedin: {
    url: "https://www.linkedin.com/in/raffy-francisco-50607b325/",
    label: "Visit LinkedIn Profile",
    icon: "ri:linkedin-fill",
    mobileIcon: "entypo-social:linkedin-with-circle",
  },
  github: {
    url: "https://github.com/raffyfrancisco",
    label: "Visit GitHub Profile",
    icon: "mdi:github",
  },
  email: {
    address: "raffy7792@gmail.com",
    composeUrl:
      "https://mail.google.com/mail/?view=cm&fs=1&to=raffy7792@gmail.com",
    icon: "solar:letter-bold",
  },
  twitter: {
    handle: "@raffyfrancisco",
  },
} as const;
