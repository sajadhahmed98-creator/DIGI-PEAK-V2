import type { Metadata } from "next";
import edinburghData from "@/data/locations/uk/edinburgh.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = edinburghData as CityData;

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

export default function EdinburghPage() {
  const allLocations = [
    { name: "London", slug: "uk/london" },
    { name: "Manchester", slug: "uk/manchester" },
    { name: "Birmingham", slug: "uk/birmingham" },
    { name: "Leeds", slug: "uk/leeds" },
    { name: "Liverpool", slug: "uk/liverpool" },
    { name: "Bristol", slug: "uk/bristol" },
    { name: "Glasgow", slug: "uk/glasgow" },
    { name: "Edinburgh", slug: "uk/edinburgh" },
    { name: "United Kingdom Hub", slug: "uk" }
  ];

  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
