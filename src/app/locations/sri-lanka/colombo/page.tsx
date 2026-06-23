import type { Metadata } from "next";
import cityJson from "@/data/locations/sri-lanka/colombo.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = cityJson as CityData;

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
    images: ["/og-sri-lanka.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: cityData.metaTitle,
    description: cityData.metaDescription,
  }
};

export default function ColomboPage() {
  const allLocations = [
    { name: "Colombo", slug: "sri-lanka/colombo" },
    { name: "Kandy", slug: "sri-lanka/kandy" },
    { name: "Galle", slug: "sri-lanka/galle" },
    { name: "Negombo", slug: "sri-lanka/negombo" },
    { name: "Sri Lanka Hub", slug: "sri-lanka" },
  ];

  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
