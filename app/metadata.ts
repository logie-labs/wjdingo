import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(configuredSiteUrl),
  title: "Beaches Backyard Maintenance | Lawn Care, Garden Maintenance, Pressure Washing & Gutter Cleaning NSW",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Beaches Backyard Maintenance offers lawn care, garden maintenance, pressure washing, and gutter cleaning across NSW. Fast, reliable, and affordable outdoor maintenance services.",
  keywords: [
    "beaches backyard maintenance",
    "lawn care",
    "garden maintenance",
    "pressure washing",
    "gutter cleaning",
    "lawn care NSW",
    "garden maintenance NSW",
    "pressure washing NSW",
    "gutter cleaning NSW",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Beaches Backyard Maintenance | Lawn Care, Garden Maintenance, Pressure Washing & Gutter Cleaning",
    description:
      "Professional lawn care, garden maintenance, pressure washing, and gutter cleaning in NSW. Book Beaches Backyard Maintenance today.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/splash.jpg",
        width: 1200,
        height: 630,
        alt: "Lawn care and outdoor maintenance services by Beaches Backyard Maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beaches Backyard Maintenance | Lawn Care, Garden Maintenance, Pressure Washing & Gutter Cleaning",
    description:
      "Lawn care, garden maintenance, pressure washing, and gutter cleaning across NSW.",
    images: ["/splash.jpg"],
  },
};