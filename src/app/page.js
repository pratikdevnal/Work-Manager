import Image from "next/image";
import BannerSection from "../components/homepage/HomeBanner";
import Feature from "@/components/homepage/FeatureSection";
import ActionSection from "@/components/homepage/ActionSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";
export const metadata = {
  title: "Home : Work Manager",
};
export default function Home() {
  return (
    <div>
      <BannerSection />
      <Feature />
      <ActionSection />
      <TestimonialSection />
    </div>
  );
}
