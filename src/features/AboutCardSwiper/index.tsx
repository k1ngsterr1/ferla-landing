"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AboutCard } from "@entities/AboutCard";
import { content } from "@shared/lib/content/aboutCardContent";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

interface IBestSellers {
  data: any;
}

export const AboutCardSwiper: React.FC<IBestSellers> = ({ data }) => {
  return (
    <Swiper
      spaceBetween={20}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
      className={styles.swiper}
      navigation={false}
    >
      {content.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center">
            <AboutCard
              icon={item.icon}
              name={
                data.components && data.components["15"]
                  ? data.components["15"].value
                  : item.name
              }
              text={
                data.components && data.components["16"]
                  ? data.components["16"].value
                  : item.text
              }
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
