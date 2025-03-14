/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Suspense, useEffect, useState, useRef } from "react";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import ProductCard from "@/components/shop/ProductCard";
import PriceSlider from "@/components/shop/PriceSlider";
import ProductCategories from "@/components/shop/Productcategories";
import {
  ProductSortValues,
  SortingDropdown,
} from "@/components/shop/SortingDropdown";
import {
  LayoutGrid,
  Grip,
  EllipsisVertical,
  Menu,
  ChevronDown,
} from "lucide-react";
import GetInTouch from "@/components/common/GetInTouch";
import { useTranslation } from "react-i18next";
import CreateAxiosInstanceWithLoader from "@/services/utility/axios-with-loader.service";
import { ProductService } from "@/services/api/product.service";
import { ProductCategoryModel } from "@/models/product/product";
import { generateIdToCategoryRecord } from "@/services/utility/utility.service";
import { useGlobalDataProvider } from "@/providers/GlobalDataProvider";
import { CustomBreadCrumb2 } from "@/components/common/CustomBreadCrumb2";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
];

const showPerPage = [
  { name: "9", href: "/shop/?per_page=9", value: 9 },
  { name: "12", href: "/shop/?per_page=12", value: 12 },
  { name: "18", href: "/shop/?per_page=18", value: 18 },
  { name: "24", href: "/shop/?per_page=24", value: 24 },
];

export default function Shop() {
  const [columns, setColumns] = useState(4);
  const [showMobileScreenCategory, setShowMobileScreenCategory] =
    useState(false);
  const { i18n } = useTranslation();
  const axiosInstanceWithLoader = CreateAxiosInstanceWithLoader(false, false);
  const { categories } = useGlobalDataProvider();

  const [pageConfig, setPageConfig] = useState({
    lang: i18n.language,
    order: "asc",
    orderby: ProductSortValues[0],
    page: 1,
    per_page: 24,
    min_price: null,
    max_price: null,
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
          ([_, value]) => value !== null && value !== undefined
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

  useEffect(() => {
    const getProductCategories = async () => {
      if (categories) {
        setSlugToCategoryRecord(generateIdToCategoryRecord(categories));
      }
    };

    getProductCategories();
  }, [categories]);

  return (
    <div className="pt-10 lg:pt-[98px]">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center pb-[100px] lg:pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black">Shop</h1>
          <div className="lg:hidden w-full mx-auto min-h-10 px-6 text-center">
            <p
              className="flex items-center gap-3 justify-center pt-4 cursor-pointer"
              onClick={() =>
                setShowMobileScreenCategory(!showMobileScreenCategory)
              }
            >
              Categories{" "}
              <ChevronDown
                className={`${showMobileScreenCategory ? " rotate-180 " : " "}`}
              />
            </p>

            {/* Smooth height transition container */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                showMobileScreenCategory
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {showMobileScreenCategory && <ProductCategories />}
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <div className="w-[276px] px-[15px] divide-y-2 hidden lg:block">
            <PriceSlider setPriceSlider={updatePageConfig} />
            <ProductCategories />
          </div>
          <div className="flex-1 ">
            <div className="px-[15px] flex justify-between max-lg:border-b">
              <CustomBreadCrumb
                links={breadcrumbLinks}
                uppercase={false}
                currentStyle="font-semibold"
              />
              
              <div className="flex items-center gap-4 ">
                <div className="hidden lg:flex items-center gap-3">
                  <p className="text-sm font-semibold">Show :</p>
                  <Suspense fallback={<div>Loading...</div>}>
                    <CustomBreadCrumb2
                      links={showPerPage}
                      activeLastLink={true}
                      updatePerPage={updatePageConfig}
                      uppercase={false}
                      currentStyle="font-extrabold text-black"
                    />
                  </Suspense>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                  <LayoutGrid
                    className={`cursor-pointer h-[22px] ${
                      columns === 2
                        ? "font-extrabold text-black"
                        : " text-gray-300"
                    }`}
                    onClick={() => setColumns(2)}
                  />
                  <Grip
                    className={`cursor-pointer ${
                      columns === 3
                        ? "font-extrabold text-black"
                        : " text-gray-300"
                    }`}
                    onClick={() => setColumns(3)}
                  />
                  <div
                    className={`flex items-center justify-center cursor-pointer -ml-[10px] ${
                      columns === 4
                        ? "font-extrabold text-black"
                        : " text-gray-300"
                    }`}
                    onClick={() => setColumns(4)}
                  >
                    <EllipsisVertical className="-mr-[10px]" />
                    <Grip />
                  </div>
                </div>
                <div className="px-4 pb-1 text-sm text-gray-700 font-sans lg:hidden">
                  Showing 1–24 of 545 results
                </div>
                <div className="max-lg:hidden">
                  <Suspense fallback={<div>Loading...</div>}>
                    <SortingDropdown setSorting={updatePageConfig} />
                  </Suspense>
                </div>
              </div>
            </div>
            <div className="lg:hidden flex w-full justify-between px-3">
              <div className="flex items-center gap-3 text-sm cursor-pointer">
                {" "}
                <Menu /> <span>Show sidebar</span>
              </div>
              <Suspense fallback={<div>Loading...</div>}>
                <SortingDropdown setSorting={updatePageConfig} />
              </Suspense>
            </div>
            <div className="flex items-center justify-center">
              <div
                className={`w-full grid pt-16 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-${columns} max-lg:px-8 mx-auto`}
              >
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    slug={product.slug}
                    name={product.name}
                    price={product.price}
                    img={product.images ? product?.images[0]?.src : ""}
                    options={product.options}
                    sku={product.sku}
                    currentCategories={product.categories}
                    slugToCategoryRecord={slugToCategoryRecord}
                    description={undefined}
                  />
                ))}
              </div>
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
