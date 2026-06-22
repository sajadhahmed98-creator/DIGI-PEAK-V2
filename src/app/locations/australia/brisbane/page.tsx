import type { Metadata } from "next";
import brisbaneData from "@/data/locations/australia/brisbane.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = brisbaneData as CityData;

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

export default function BrisbanePage() {
      const allLocations = [
    { name: "Sydney", slug: "australia/sydney" },
    { name: "Melbourne", slug: "australia/melbourne" },
    { name: "Brisbane", slug: "australia/brisbane" },
    { name: "Perth", slug: "australia/perth" },
    { name: "Adelaide", slug: "australia/adelaide" },
    { name: "Gold Coast", slug: "australia/gold-coast" },
    { name: "Canberra", slug: "australia/canberra" },
    { name: "Singapore", slug: "singapore" },
    { name: "Sri Lanka", slug: "sri-lanka" },
    { name: "Australia Hub", slug: "australia" }
  ];
  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
