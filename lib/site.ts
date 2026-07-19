export const siteConfig = {
  name: "GOOD GARDEN FOOD",
  description:
    "An international fresh fruit supply chain, growing better days from orchard to table.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.goodgardenfood.com",
  email: "hello@goodgardenfood.com",
  phone: "+86 21 6888 2026",
};

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();
