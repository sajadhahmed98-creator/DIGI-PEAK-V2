import type { Metadata } from "next";
import cityJson from "@/data/locations/qatar/al-wakrah.json";
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
    images: ["/og-qatar.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: cityData.metaTitle,
    description: cityData.metaDescription,
  }
};

export default function AlWakrahPage() {
  const allLocations = [
    { name: "Doha", slug: "qatar/doha" },
    { name: "Lusail", slug: "qatar/lusail" },
    { name: "Al Khor", slug: "qatar/al-khor" },
    { name: "Al Wakrah", slug: "qatar/al-wakrah" },
    { name: "Qatar Hub", slug: "qatar" },
  ];

  return <LocationPageTemplate city={cityData} allLocations={allLocations} />;
}
