import type { Metadata } from "next";
import cityDataImport from "@/data/locations/uae/ajman.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = cityDataImport as CityData;

export const metadata: Metadata = {
  title: cityData.metaTitle,
  description: cityData.metaDescription,
  keywords: cityData.keywords,
  alternates: {
    canonical: `https://www.digipeak.agency/locations/${cityData.slug}`,
  },
  openGraph: {
    title: cityData.metaTitle,
    description: cityData.metaDescription,
    url: `https://www.digipeak.agency/locations/${cityData.slug}`,
    images: ["/og-uae.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: cityData.metaTitle,
    description: cityData.metaDescription,
  }
};

export default function AjmanPage() {
  const allLocations = [
    { name: "Dubai", slug: "uae/dubai" },
    { name: "Abu Dhabi", slug: "uae/abu-dhabi" },
    { name: "Sharjah", slug: "uae/sharjah" },
    { name: "Ajman", slug: "uae/ajman" },
    { name: "Ras Al Khaimah", slug: "uae/ras-al-khaimah" },
    { name: "Fujairah", slug: "uae/fujairah" },
    { name: "Umm Al Quwain", slug: "uae/umm-al-quwain" },
    { name: "UAE Hub", slug: "uae" }
  ];

  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
