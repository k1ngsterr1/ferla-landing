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
      {content.map((item, index) => {
        const nameKey = `18 + ${index * 2}`;
        const textKey = `19 + ${index * 2}`;

        return (
          <AboutCard
            key={index}
            icon={item.icon}
            name={
              data.components && data.components[nameKey]
                ? data.components[nameKey].value
                : "Content Not Found"
            }
            text={
              data.components && data.components[textKey]
                ? data.components[textKey].value
                : "Content Not Found"
            }
          />
        );
      })}
    </Swiper>
  );
};
