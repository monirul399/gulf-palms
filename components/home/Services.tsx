import React from "react";
import CustomCarousel from "../common/CustomCarousel";

export default function Services() {
  return (
    <div>
      <div className="pb-[30px] space-y-5 max-w-[800px]">
        <p className="text-gray-800 text-xl">OUR SERVICES</p>
        <p className="text-gray-800 font-bold text-[29px]">
          SERVICES PROVIED BY GULF PALM
        </p>
        <p className="text-gray-800  text-[13px]">
          Our experienced team provides customized solutions from design to
          execution based on our clients needs while keeping in mind the
          agricultural environment to ensure sustainable green spaces.
        </p>
      </div>
      <div>
        <CustomCarousel
          slidesToScroll={3}
          slidesToShow={3}
          data={[
            {
              component: (
                <div
                  style={{
                    width: "440px",
                    height: "440px",
                    backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="relative"
                >
                  <div className="absolute top-1 left-0 h-full w-full bg-black bg-opacity-30 p-5 text-white space-y-[10px]">
                    <p className="text-xl">PLANTS DOCTORS</p>
                    <p className="text-2xl font-bold">GULF PALM</p>
                    <p className="">
                      Gulf Palms caters to a wide scope of clients ranging from
                      Governmental, Commercial, Industrial to Residential. Our
                      experienced team provides customized solutions from design
                      to execution based on our clients.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              component: (
                <div
                  style={{
                    width: "440px",
                    height: "440px",
                    backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="relative"
                >
                  <div className="absolute top-1 left-0 h-full w-full bg-black bg-opacity-30 p-5 text-white space-y-[10px]">
                    <p className="text-xl">PLANTS DOCTORS</p>
                    <p className="text-2xl font-bold">GULF PALM</p>
                    <p className="">
                      Gulf Palms caters to a wide scope of clients ranging from
                      Governmental, Commercial, Industrial to Residential. Our
                      experienced team provides customized solutions from design
                      to execution based on our clients.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              component: (
                <div
                  style={{
                    width: "440px",
                    height: "440px",
                    backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="relative"
                >
                  <div className="absolute top-1 left-0 h-full w-full bg-black bg-opacity-30 p-5 text-white space-y-[10px]">
                    <p className="text-xl">PLANTS DOCTORS</p>
                    <p className="text-2xl font-bold">GULF PALM</p>
                    <p className="">
                      Gulf Palms caters to a wide scope of clients ranging from
                      Governmental, Commercial, Industrial to Residential. Our
                      experienced team provides customized solutions from design
                      to execution based on our clients.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              component: (
                <div
                  style={{
                    width: "440px",
                    height: "440px",
                    backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="relative"
                >
                  <div className="absolute top-1 left-0 h-full w-full bg-black bg-opacity-30 p-5 text-white space-y-[10px]">
                    <p className="text-xl">PLANTS DOCTORS</p>
                    <p className="text-2xl font-bold">GULF PALM</p>
                    <p className="">
                      Gulf Palms caters to a wide scope of clients ranging from
                      Governmental, Commercial, Industrial to Residential. Our
                      experienced team provides customized solutions from design
                      to execution based on our clients.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              component: (
                <div
                  style={{
                    width: "440px",
                    height: "440px",
                    backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="relative"
                >
                  <div className="absolute top-1 left-0 h-full w-full bg-black bg-opacity-30 p-5 text-white space-y-[10px]">
                    <p className="text-xl">PLANTS DOCTORS</p>
                    <p className="text-2xl font-bold">GULF PALM</p>
                    <p className="">
                      Gulf Palms caters to a wide scope of clients ranging from
                      Governmental, Commercial, Industrial to Residential. Our
                      experienced team provides customized solutions from design
                      to execution based on our clients.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              component: (
                <div
                  style={{
                    width: "440px",
                    height: "440px",
                    backgroundImage: `url(https://gulfpalms.com/wp-content/uploads/2023/10/DSC08580.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="relative"
                >
                  <div className="absolute top-1 left-0 h-full w-full bg-black bg-opacity-30 p-5 text-white space-y-[10px]">
                    <p className="text-xl">PLANTS DOCTORS</p>
                    <p className="text-2xl font-bold">GULF PALM</p>
                    <p className="">
                      Gulf Palms caters to a wide scope of clients ranging from
                      Governmental, Commercial, Industrial to Residential. Our
                      experienced team provides customized solutions from design
                      to execution based on our clients.
                    </p>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
