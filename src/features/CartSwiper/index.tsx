"use client";
import React, { useRef } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "@shared/ui/SwiperButtons";
import { StaticImageData } from "next/image";

import styles from "./styles.module.scss";

interface ICartSwiper {
  spaceBetween: number;
  slidesPerView: number;
  images: string[] | StaticImageData[];
}

export const CartSwiper: React.FC<ICartSwiper> = ({
  spaceBetween,
  slidesPerView,
}) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className={styles.cart_swiper}>
      <Swiper
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        className={styles.cart_swiper}
        navigation={false}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
      ></Swiper>
    </div>
  );
};
