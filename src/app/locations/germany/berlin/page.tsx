import type { Metadata } from "next";
import berlinData from "@/data/locations/germany/berlin.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = berlinData as CityData;

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

export default function BerlinPage() {
  const allLocations = [
    { name: "Berlin", slug: "germany/berlin" },
    { name: "Munich", slug: "germany/munich" },
    { name: "Frankfurt", slug: "germany/frankfurt" },
    { name: "Hamburg", slug: "germany/hamburg" },
    { name: "Cologne", slug: "germany/cologne" },
    { name: "Stuttgart", slug: "germany/stuttgart" },
    { name: "Düsseldorf", slug: "germany/dusseldorf" },
    { name: "Leipzig", slug: "germany/leipzig" },
    { name: "Germany Hub", slug: "germany" }
  ];

  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
