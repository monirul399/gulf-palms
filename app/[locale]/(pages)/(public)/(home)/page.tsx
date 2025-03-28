'use client';

import React, { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import HomeFirstProductGrid from "@/components/home/HomeFirstProductGrid";
import RecentProducts from "@/components/home/RecentProducts";
import ShowRoom from "@/components/home/ShowRoom";
import Services from "@/components/home/Services";
import ProductsShowCase from "@/components/home/ProductsShowCase";
import HomeSecondProductGrid from "@/components/home/HomeSecondProductGrid";
import WhoWeAre from "@/components/home/WhoWeAre";
import LocationMap from "@/components/home/LocationMap";
import Customers from "@/components/home/Customers";
import { ProductCategoryModel } from "@/models/product/product";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { generateIdToCategoryRecord } from "@/services/utility/utility.service";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import VideoShowCase from "@/components/home/VideoShowCase";

function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {

  const { categories } = useGlobalDataProvider();
  const [slugToCategoryRecord, setSlugToCategoryRecord] = useState<Record<number, ProductCategoryModel>>({});

  useEffect(() => {
    if (categories) {
      setSlugToCategoryRecord(generateIdToCategoryRecord(categories));
    }
  }, [categories]);

  const { i18n: { language: currentLocale } } = useTranslation();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(false, false);

  const [recentProductConfig, setRecentProductConfig] = useState({
    lang: currentLocale,
    page: 1,
    per_page: 15,
    order: 'desc',
    orderby: 'date',
    category: 'featured',
    type: 'variable'
  });

  const [recentProducts, setRecentProducts] = useState<any[]>([]);
  const [isRecentProductsLoading, setIsRecentProductsLoading] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const getRecentProducts = async () => {
      setIsRecentProductsLoading(true);
      try {
        const response = await ProductService.Get(
          recentProductConfig,
          axiosInstanceWithLoader,
          true
        );

        setRecentProducts(response);
        setIsRecentProductsLoading(false);
      } catch (error) {
        console.error(error);
        setIsRecentProductsLoading(false);
      }
    };

    getRecentProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recentProductConfig]);

  return (
    <div className="w-full mx-auto bg-white h-fit max-h-fit space-y-[0px]">
      <div className="w-full max-w-[1370px] mx-auto">
        <HeroSection />
      </div>
      <div className="w-full max-w-[1370px] mx-auto">
        <HomeFirstProductGrid slugToCategoryRecord={slugToCategoryRecord} />
      </div>
      <div className="w-full max-w-[1370px] mx-auto py-[100px]">
        <RecentProducts products={recentProducts} slugToCategoryRecord={slugToCategoryRecord} isLoading={isRecentProductsLoading} />
      </div>
      <ShowRoom />
      <div className="w-full max-w-[1370px] mx-auto pt-[100px]">
        <Services />
      </div>
      <div className="w-full max-w-[1370px] mx-auto pt-32">
        <Customers />
      </div>
      <div className="w-full max-w-[1370px] mx-auto">
        <ProductsShowCase slugToCategoryRecord={slugToCategoryRecord} />
      </div>
      <div className="w-full max-w-[1370px] mx-auto">
        <HomeSecondProductGrid slugToCategoryRecord={slugToCategoryRecord} />
      </div>
      <WhoWeAre />
      <div className="w-full max-w-[1370px] mx-auto">
        <LocationMap />
      </div>
      <VideoShowCase />
    </div>
  );
}

export default HomePage;
