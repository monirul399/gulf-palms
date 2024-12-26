import React from "react";
import HeroSection from "@/components/home/HeroSection";
import HomeFirstProductGrid from "@/components/home/HomeFirstProductGrid";
import RecentProducts from "@/components/home/RecentProducts";
import ShowRoom from "@/components/home/ShowRoom";
import Services from "@/components/home/Services";
import ProductsShowCase from "@/components/home/ProductsShowCase";
import HomeSecondProductGrid from "@/components/home/HomeSecondProductGrid";
import WhoWeAre from "@/components/home/WhoWeAre";
import LocationMap from "@/components/home/LocationMap";
import VideoShowCase from "@/components/home/VideoShowCase";

async function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <div className="max-w-[100vw] md:w-[1370px] mx-auto bg-white h-fit max-h-fit space-y-[90px]">
      <HeroSection />
      <HomeFirstProductGrid />
      <div className="py-[100px]">
        <RecentProducts />
      </div>
      <ShowRoom />
      <div className="pt-[396px]">
        <Services />
      </div>
      <ProductsShowCase />
      <HomeSecondProductGrid />
      <WhoWeAre />
      <div className="pb-[90px]">
        <LocationMap />
      </div>
      <VideoShowCase />
      <div className="pt-1"></div>
    </div>
  );
}

export default HomePage;
