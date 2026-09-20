const previewUrl = "https://instituto-tecnico-rivedu.vercel.app";

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || previewUrl,
  isLaunched: process.env.NEXT_PUBLIC_SITE_LAUNCHED === "true",
} as const;
