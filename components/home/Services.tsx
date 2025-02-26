"use client";

import { Button } from "@/components/ui/button";
import CustomCarousel from "../common/CustomCarousel";
import { useTranslation } from "react-i18next"; 

export default function Services() {
  const { t } = useTranslation();

  const createSlide = (bgURL: string) => (
    <div
      style={{
        width: "440px",
        height: "440px",
        backgroundImage: `url(${bgURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative group/number !w-[98vw] md:!w-[48vw] lg:!w-[310px] xl:!w-[440px] overflow-hidden"
    >
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 p-5 text-white space-y-[10px]">
        <p className="text-xl font-sans">PLANTS DOCTORS</p>
        <p className="text-2xl font-bold font-arabic">GULF PALM</p>
        <p className="font-sans">
          Gulf Palms caters to a wide scope of clients ranging from
          Governmental, Commercial, Industrial to Residential. Our experienced
          team provides customized solutions from design to execution based on
          our clients.
        </p>
        <div className="w-full h-[48px] overflow-hidden !mt-4 ">
          <Button
            className="translate-y-[48px] group-hover/number:translate-y-[0px] rounded-none bg-primary transition-transform duration-500 opacity-90 hover:bg-primary hover:opacity-100 w-[113px] h-[42px] grid place-content-center"
            variant={"default"}
          >
            READ MORE
          </Button>
        </div>
      </div>
    </div>
  );

  const slidesData = [
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_567716494.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/compressed-shutterstock_106616339.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/indoor-services-thumb.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg"
      ),
    },
    {
      component: createSlide(
        "https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg"
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-[1458px]">
        <div className="pb-[30px] space-y-2 md:space-y-6 max-w-[800px]">
        <p className="text-[#777777] text-xl md:text-[30px] font-light font-sans">
          {t("services.ourServices")}
        </p>
        <p className="text-[#242424] font-bold text-2xl md:text-[36px] font-arabic">
          {t("services.servicesProvided")}
        </p>
        <p className="text-[#777777] text-sm md:text-[16px] font-sans">
          {t("services.description")}
        </p>
      </div>
      <div className="pb-[50px]">
        <CustomCarousel
          slidesToScroll={3}
          slidesToShow={3}
          data={[...slidesData]}
          autoPlay={true}
          MobileSlidesNumber={1}
        />
      </div>
    </div>
  );
}
