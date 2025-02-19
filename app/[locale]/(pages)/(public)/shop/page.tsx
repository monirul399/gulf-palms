"use client";
import { Suspense, useState } from "react";
import { CustomBreadCrumb } from "@/components/common/CustomBreadCrumb";
import ProductCard from "@/components/shop/ProductCard";
import PriceSlider from "@/components/shop/PriceSlider";
import Productcategories from "@/components/shop/Productcategories";
import { SortingDropdown } from "@/components/shop/SortingDropdown";
import { LayoutGrid, Grip, EllipsisVertical } from "lucide-react";
import GetInTouch from "@/components/common/GetInTouch";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
];

const showPerpage = [
  { name: "9", href: "/shop/?per_page=9" },
  { name: "12", href: "/shop/?per_page=12" },
  { name: "18", href: "/shop/?per_page=18" },
  { name: "24", href: "/shop/?per_page=24" },
];

const products = [
  {
    "id": 1,
    "name": "Bamboo Stick",
    "price": 0.040,
    "img": "https://gulfpalms.com/wp-content/uploads/2024/01/Citrus-Porring-Soil-300x300.jpeg",
    "options": ["Small", "Medium", "Large"]
  },
  {
    "id": 2,
    "name": "Garden Shovel",
    "price": 2.50,
    "img": "https://gulfpalms.com/wp-content/uploads/2024/01/Citrus-Porring-Soil-300x300.jpeg",
    "options": ["Standard", "Heavy-Duty"]
  },
  {
    "id": 3,
    "name": "Watering Can",
    "price": 5.99,
    "img": "https://gulfpalms.com/wp-content/uploads/2024/01/Citrus-Porring-Soil-300x300.jpeg",
    "options": ["1L", "2L", "5L"]
  },
  {
    "id": 4,
    "name": "Potting Soil",
    "price": 3.75,
    "img": "https://gulfpalms.com/wp-content/uploads/2024/01/Citrus-Porring-Soil-300x300.jpeg",
    "options": ["5kg", "10kg", "20kg"]
  },
  {
    "id": 5,
    "name": "Pruning Shears",
    "price": 7.25,
    "img": "https://gulfpalms.com/wp-content/uploads/2024/01/Citrus-Porring-Soil-300x300.jpeg",
    "options": ["Standard", "Premium"]
  }
]


export default function Shop() {
  const [columns, setColumns] = useState(4)

  return (
    <div className="pt-[98px] ">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col items-center pb-[200px] pt-[50px]">
          <h1 className="text-[36px] font-bold text-black">Shop</h1>
        </div>
        <div className="flex items-start ">
          <div className="w-[276px] px-[15px]  divide-y-2">
            <PriceSlider />
            <Productcategories />
          </div>
          <div className=" flex-1 ">
            <div className="px-[15px] flex  justify-between">
              <CustomBreadCrumb
                links={breadcrumbLinks}
                uppercase={false}
                currentStyle="font-semibold"
              />
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <p className="text-sm font-semibold ">Show :</p>
                  <CustomBreadCrumb
                    links={showPerpage}
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
                  <SortingDropdown />
                </Suspense>
              </div>
            </div>
            <div
              className={`grid pt-16 grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-${columns}`}
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  img={product.img}
                  options={product.options}
                  category={undefined}
                  categoryLink={undefined} 
                  description={undefined}                  
                  />
              ))}
            </div>
          </div>
        </div>
      </div>
      <GetInTouch />
    </div>
  );
}
