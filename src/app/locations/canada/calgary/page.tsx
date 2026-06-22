import type { Metadata } from "next";
import calgaryData from "@/data/locations/canada/calgary.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = calgaryData as CityData;

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

export default function CalgaryPage() {
  const allLocations = [
    { name: "Toronto", slug: "canada/toronto" },
    { name: "Vancouver", slug: "canada/vancouver" },
    { name: "Calgary", slug: "canada/calgary" },
    { name: "Ottawa", slug: "canada/ottawa" },
    { name: "Edmonton", slug: "canada/edmonton" },
    { name: "Montreal", slug: "canada/montreal" },
    { name: "Winnipeg", slug: "canada/winnipeg" },
    { name: "Halifax", slug: "canada/halifax" },
    { name: "Canada Hub", slug: "canada" }
  ];

  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
