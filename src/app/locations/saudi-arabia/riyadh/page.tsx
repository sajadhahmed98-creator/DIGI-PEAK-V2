import type { Metadata } from "next";
import cityJson from "@/data/locations/saudi-arabia/riyadh.json";
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
    images: ["/og-saudi.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: cityData.metaTitle,
    description: cityData.metaDescription,
  }
};

export default function RiyadhPage() {
  const allLocations = [
    { name: "Riyadh", slug: "saudi-arabia/riyadh" },
    { name: "Jeddah", slug: "saudi-arabia/jeddah" },
    { name: "Dammam", slug: "saudi-arabia/dammam" },
    { name: "Khobar", slug: "saudi-arabia/khobar" },
    { name: "Medina", slug: "saudi-arabia/medina" },
    { name: "Saudi Arabia Hub", slug: "saudi-arabia" },
  ];

  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
