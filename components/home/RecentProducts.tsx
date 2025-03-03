"use client";

import React from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";
import { extractCurrency } from "@/services/utility/utility.service";
import { useTranslation } from "react-i18next";
import { ProductCategoryModel } from "@/models/product/product";
import { Skeleton } from "../ui/skeleton";

interface RecentProductsProps {
  products: any[];
  slugToCategoryRecord: Record<number, ProductCategoryModel>;
  isLoading?: boolean;
}

export default function RecentProducts({ products, slugToCategoryRecord, isLoading = false }: RecentProductsProps) {
  const { t } = useTranslation();
  return (
    <div className="z-[50]">
       <div className="pb-[50px] space-y-[10px]">
        <p className="text-[#777777] md:text-[30px] font-sans font-light">
          {t("recentProducts.newlyAdded")}
        </p>
        <p className="text-[#242424] font-bold md:text-[36px] font-arabic">
          {t("recentProducts.title")}
        </p>
        <p className="text-[#777777] md:text-[16px] font-sans">
          {t("recentProducts.description")}
        </p>
      </div>
      {
        isLoading &&
        <div className="flex flex-col mb-5">
          <Skeleton className="h-[18rem] w-full rounded-xl bg-gray-100" />
        </div>
      }
      {
        !isLoading &&
        <CustomCarousel
          slidesToShow={4}
          slidesToScroll={4}
          MobileSlidesNumber={1}
          data={products.map((product) => ({
            component: (
              <RenderImageAndProducts
                key={product.productId}
                renderType="product"
                imageFileOrUrl={product.imageFileOrUrl}
                images={product.images}
                name={product.name}
                description={product.description}
                price={product.price}
                productId={product.productId} 
                slug={product.slug} 
                currency={extractCurrency(product.price_html)} 
                currentCategories={product.categories} 
                productAttribute={product.attributes[0]}
                slugToCategoryRecord={slugToCategoryRecord}
              />
            ),
          }))}
        />
      }
    </div>
  );
}
