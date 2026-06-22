import type { Metadata } from "next";
import austinData from "@/data/locations/usa/austin.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = austinData as CityData;

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
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: cityData.metaTitle,
    description: cityData.metaDescription,
  }
};

export default function AustinPage() {
  const allLocations = [
    { name: "Austin", slug: "usa/austin" },
    { name: "San Diego", slug: "usa/san-diego" },
    { name: "Dallas", slug: "usa/dallas" },
    { name: "Houston", slug: "usa/houston" },
    { name: "Miami", slug: "usa/miami" },
    { name: "Chicago", slug: "usa/chicago" },
    { name: "New York", slug: "usa/new-york" },
    { name: "Los Angeles", slug: "usa/los-angeles" },
    { name: "San Francisco", slug: "usa/san-francisco" },
    { name: "USA Hub", slug: "usa" }
  ];

  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
