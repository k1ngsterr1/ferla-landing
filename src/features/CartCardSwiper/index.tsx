"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartCard } from "@entities/CartCard";
import { cartsContent } from "@shared/lib/content/cartsContent";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const CartCardSwiper = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      className={styles.swiper}
      navigation={false}
    >
      {cartsContent.map((card, index) => (
        <SwiperSlide key={index}>
          <CartCard
            name={card.name}
            title={card.title}
            paragraph={card.paragraph}
            photo={card.image}
            href={card.href}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
