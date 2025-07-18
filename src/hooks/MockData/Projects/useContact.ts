import { ContactMethod } from "@/types";

export const contactMethods: ContactMethod[] = [
  {
    icon: "mdi:email",
    action: () => window.open("mailto:raffy7792@gmail.com", "_blank"),
  },
  {
    icon: "mdi:linkedin",
    action: () =>
      window.open(
        "https://www.linkedin.com/in/raffy-francisco-50607b325/",
        "_blank"
      ),
  },
  {
    icon: "simple-icons:behance",
    action: () =>
      window.open("https://www.behance.net/raffyfrancisco", "_blank"),
  },
  {
    icon: "mdi:github",
    action: () => window.open("https://github.com/NullsCollection", "_blank"),
  },
  {
    icon: "mdi:whatsapp",
    action: () => window.open("http://wa.me/+639600723886", "_blank"),
  },
];
