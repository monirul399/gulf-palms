"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import ProductCard from "@/components/shop/ProductCard";
import PriceSlider from "@/components/shop/PriceSlider";
import ProductCategories from "@/components/shop/Productcategories";
import {
  ProductSortValues,
  SortingDropdown,
} from "@/components/shop/SortingDropdown";
import { LayoutGrid, Grip, EllipsisVertical } from "lucide-react";
import GetInTouch from "@/components/common/GetInTouch";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { showPerPage } from "@/constants/global-constants";
import { ProductCategoryModel } from "@/models/product/product";
import { generateIdToCategoryRecord } from "@/services/utility/utility.service";
import {
  SlugType,
  useGlobalDataProvider,
} from "@/providers/GlobalDataProvider";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function SubcategoryPage() {
  const { categories, addSlugToTranslate } = useGlobalDataProvider();
  const { category: categorySlug, slug: subcategorySlug } = useParams();
  const [columns, setColumns] = useState(4);
  const {
    i18n: { language: currentLocale },
  } = useTranslation();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader();

  // Orders // page: 1, per_page: 10
  const [pageConfig, setPageConfig] = useState({
    lang: currentLocale,
    order: "asc",
    orderby: ProductSortValues[0],
    page: 1,
    per_page: 24,
    min_price: null,
    max_price: null,
    category: subcategorySlug,
  });

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const updatePageConfig = (key: string, value: any) => {
    setPageConfig((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const cleanedPageConfig = Object.fromEntries(
        Object.entries(pageConfig).filter(
          ([key, value]) => value !== null && value !== undefined
        )
      );
      try {
        const response = await ProductService.Get(
          cleanedPageConfig,
          axiosInstanceWithLoader
        );
        setProducts((prev) =>
          pageConfig.page === 1 ? response : [...prev, ...response]
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageConfig]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPageConfig((prev) => ({
            ...prev,
            page: prev.page + 1,
          }));
        }
      },
      { threshold: 1.0 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [loading]);

  // Category
  const [slugToCategoryRecord, setSlugToCategoryRecord] = useState<
    Record<number, ProductCategoryModel>
  >({});
  const [currentCategory, setCurrentCategory] = useState<any>({});
  const [currentSubCategory, setCurrentSubCategory] = useState<any>({});

  useEffect(() => {
    const getProductCategories = async () => {
      if (categories) {
        setSlugToCategoryRecord(generateIdToCategoryRecord(categories));

        //Category
        let currentCategorySlug = decodeURIComponent(categorySlug as string);
        const selectedCategory = categories.find(
          (x) => x.slug === currentCategorySlug
        );

        if (!selectedCategory) {
          notFound();
          return;
        }

        setCurrentCategory(selectedCategory);

        if (selectedCategory) {
          addSlugToTranslate(
            currentLocale,
            decodeURIComponent(currentCategorySlug as string),
            currentLocale === "ar"
              ? selectedCategory.translations.en
              : selectedCategory.translations.ar,
            SlugType.Category,
            ""
          );
        }

        //Sub Category
        let currentSubCategorySlug = decodeURIComponent(
          subcategorySlug as string
        );
        const selectedSubCategory = categories.find(
          (x) => x.slug === currentSubCategorySlug
        );

        setCurrentSubCategory(selectedSubCategory);

        if (selectedSubCategory) {
          addSlugToTranslate(
            currentLocale,
            decodeURIComponent(currentSubCategorySlug as string),
            currentLocale === "ar"
              ? selectedSubCategory.translations.en
              : selectedSubCategory.translations.ar,
            SlugType.Category,
            ""
          );
        }
      }
    };

    getProductCategories();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  return (
    <div className="pt-[98px] ">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black capitalize">
            {currentSubCategory?.name
              ? decodeURIComponent(currentSubCategory?.name)
              : ""}
          </h1>
        </div>
        <div className="flex items-start ">
          <div className="w-[276px] px-[15px]  divide-y-2">
            <PriceSlider setPriceSlider={updatePageConfig} />
            <ProductCategories />
          </div>
          <div className=" flex-1 ">
            <div className="px-[15px] flex  justify-between">
              {/* <CustomBreadCrumb
                links={breadcrumbLinks}
                uppercase={true}
                currentStyle="font-semibold"
              /> */}
              <div className="">
                <span className="text-muted-foreground font-medium">
                  <span>Home</span>
                  &nbsp;&nbsp;/&nbsp;&nbsp;
                  <Link href={`/product-category/${currentCategory?.slug}`}>
                    {currentCategory?.name
                      ? decodeURIComponent(currentCategory?.name)
                      : ""}
                  </Link>
                  &nbsp;&nbsp;/&nbsp;&nbsp;
                  <span className=" font-semibold">
                    {currentSubCategory?.name
                      ? decodeURIComponent(currentSubCategory?.name)
                      : ""}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold ">Show :</p>
                  <CustomBreadCrumb
                    links={showPerPage}
                    updatePerPage={updatePageConfig}
                    uppercase={false}
                    currentStyle="font-semibold"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LayoutGrid
                    className="cursor-pointer"
                    onClick={() => setColumns(2)}
                  />
                  <Grip
                    className="cursor-pointer"
                    onClick={() => setColumns(3)}
                  />
                  <div
                    className="flex items-center justify-center cursor-pointer -ml-[10px]"
                    onClick={() => setColumns(4)}
                  >
                    <EllipsisVertical className="-mr-[10px]" />
                    <Grip />
                  </div>
                </div>
                <Suspense fallback={<div>Loading...</div>}>
                  <SortingDropdown setSorting={updatePageConfig} />
                </Suspense>
              </div>
            </div>
            <div
              className={`grid pt-16 grid-cols-1 gap-3 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-${columns}`}
            >
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  slug={product.slug}
                  name={product.name}
                  price={product.price}
                  img={product.images ? product.images[0].src : ""}
                  options={product.options}
                  sku={product.sku}
                  currentCategories={product.categories}
                  description={undefined}
                  slugToCategoryRecord={slugToCategoryRecord}
                />
              ))}
            </div>
            <div
              ref={loaderRef}
              className="text-center my-6 grid place-content-center w-full"
            >
              {loading && (
                <div className="flex items-center gap-2 bg-gray-100 w-fit px-3 py-2 border border-gray-400 rounded-lg">
                  LOADING{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-spin"
                  >
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
