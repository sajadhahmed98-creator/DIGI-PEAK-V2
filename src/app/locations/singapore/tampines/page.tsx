import type { Metadata } from "next";
import tampinesData from "@/data/locations/singapore/tampines.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = tampinesData as CityData;

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
  },
};

export default function TampinesPage() {
  const allLocations = [
    { name: "Singapore Hub", slug: "singapore" },
    { name: "Orchard Road", slug: "singapore/orchard" },
    { name: "CBD", slug: "singapore/cbd" },
    { name: "Jurong", slug: "singapore/jurong" },
    { name: "Tampines", slug: "singapore/tampines" },
    { name: "Changi", slug: "singapore/changi" },
  ];
  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
