export const siteConfig = {
  name: "GOOD GARDEN",
  description:
    "Wholesale Cavendish banana programmes from selected origins for importers, distributors and retail buyers across Central Asia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.goodgardenfood.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  office: process.env.NEXT_PUBLIC_CONTACT_OFFICE || "",
  socials: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL || "",
  },
};

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
