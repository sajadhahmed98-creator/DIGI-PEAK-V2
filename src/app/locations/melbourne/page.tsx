import type { Metadata } from "next";
import melbourneData from "@/data/locations/melbourne.json";
import { LocationPageTemplate, CityData } from "@/components/locations/LocationPageTemplate";

const cityData = melbourneData as CityData;

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

export default function MelbournePage() {
    const allLocations = [
    { name: "Sydney", slug: "sydney" },
    { name: "Melbourne", slug: "melbourne" },
    { name: "Brisbane", slug: "brisbane" },
    { name: "Perth", slug: "perth" },
    { name: "Adelaide", slug: "adelaide" },
    { name: "Gold Coast", slug: "gold-coast" },
    { name: "Canberra", slug: "canberra" },
    { name: "Singapore", slug: "singapore" },
    { name: "Sri Lanka", slug: "sri-lanka" },
    { name: "Australia Hub", slug: "australia" }
  ];
  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
