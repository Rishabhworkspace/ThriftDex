import { Hero } from "@/components/sections/Hero";
import { EditorsPicks } from "@/components/sections/EditorsPicks";
import { FreshFinds } from "@/components/sections/FreshFinds";
import { CategorySpotlight } from "@/components/sections/CategorySpotlight";
import { RareFinds } from "@/components/sections/RareFinds";
import { Categories } from "@/components/sections/Categories";
import { TodaysDrop } from "@/components/sections/TodaysDrop";
import { HowThriftingWorks } from "@/components/sections/HowThriftingWorks";
import { TrustSection } from "@/components/sections/TrustSection";
import { InstagramSection } from "@/components/sections/InstagramSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <EditorsPicks />
      <FreshFinds />
      <RareFinds />
      <CategorySpotlight />
      <TodaysDrop />
      <Categories />
      <HowThriftingWorks />
      <TrustSection />
      <InstagramSection />
    </div>
  );
}
