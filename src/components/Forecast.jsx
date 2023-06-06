import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Forecast = ({ forecast, title }) => {
  return (
    <div>
      <div className="flex items-center justify-start my-7">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />

      <Swiper spaceBetween={2} slidesPerView={6} className=" text-white">
        {forecast.map(({ time, icon, temp_c: tempC }, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center">
              <p className="font-light text-sm">
                {time
                  .toLocaleString("default", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })
                  .split("PM")
                  .join("")}
              </p>
              <img src={icon} className="w-12 my-1" alt="" />
              <p className="font-medium">{tempC}°</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Forecast;
