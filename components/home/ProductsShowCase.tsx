import React from "react";
import RenderImageAndProducts from "../common/RenderImageAndProducts";
import CustomCarousel from "../common/CustomCarousel";
import ImageTextCard from "../common/ImageTextCard";

const products = [
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2024/10/%D9%85%D9%84%D9%85%D8%B9-%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA.jpg",
      "https://gulfpalms.com/wp-content/uploads/2024/10/%D9%85%D9%84%D9%85%D8%B9-%D9%86%D8%A8%D8%A7%D8%AA%D8%A7%D8%AA.jpg",
    ],
    name: "Red Sneakers",
    description: "Stylish red sneakers for casual wear.",
    price: 49.99,
    productId: "P001",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: [
      "https://gulfpalms.com/wp-content/uploads/2024/03/Palms-Pollen-Powder-1.jpg",
      "https://gulfpalms.com/wp-content/uploads/2024/03/Palms-Pollen-Powder-2-860x860.jpg",
    ],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P002",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Red Sneakers",
    description: "Stylish red sneakers for casual wear.",
    price: 49.99,
    productId: "P003",
  },
  {
    renderType: "product",
    imageFileOrUrl: "",
    images: ["https://gulfpalms.com/wp-content/uploads/2023/10/18-430x430.jpg"],
    name: "Blue Denim Jacket",
    description: "Classic denim jacket for all seasons.",
    price: 79.99,
    productId: "P004",
  },
];

const topLayer = (
  <div className=" grid h-full w-full place-content-center">
    <div className=" w-[476px] py-3 h-full flex flex-col justify-center items-center">
      <div className="grid place-content-center w-full ">
        <div className="pb-[20px] text-center w-[364px] ">
          <p className="text-[#777777] text-[30px] font-sans font-light">
            GULF PALMS
          </p>
          <p className="text-[#242424] font-bold text-[36px] font-arabic">
            PALMS PRODUCTS
          </p>
          <p className="text-[#777777] text-[16px] font-sans">
            Our Team are constantly working to keep the lead in the Kuwaiti
            market through establishing our vision and missions
          </p>
        </div>
      </div>
      <CustomCarousel
        slidesToShow={2}
        slidesToScroll={2}
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
            />
          ),
          width: " !w-[218px] ",
        }))}
      />
    </div>
  </div>
);

export default function ProductsShowCase() {
  return (
    <div className="grid place-content-center max-w-content mx-auto mt-[50px]">
      <div className="w-[1140px] space-y-[100px]">
        <ImageTextCard
          rightContent={{
            type: "image",
            src: "https://gulfpalms.com/wp-content/uploads/2023/06/3-slide-img.jpg",
            bgColor: "bg-white",
            imgHeight: "h-[706px]",
          }}
          leftContent={{
            type: "component",
            component: topLayer,
          }}
          colReversed = {true}
        />
        <ImageTextCard
          leftContent={{
            type: "image",
            src: "https://gulfpalms.com/wp-content/uploads/2021/09/2-slide-img.jpg",
            bgColor: "bg-white",
            imgHeight: "h-[730px]",
          }}
          rightContent={{
            type: "component",
            component: topLayer,
          }}
          
        />
      </div>
    </div>
  );
}
