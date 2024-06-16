"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartCard } from "@entities/CartCard";
import { cartsContent } from "@shared/lib/content/cartsContent";
import { PopupMobile } from "@entities/PopupMobile";
import Link from "next/link";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface IOurBikesScreen {
  allBikes: boolean;
}

export const CartCardSwiper: React.FC<IOurBikesScreen> = ({ allBikes }) => {
  return (
    <>
      {allBikes && (
        <Link
          href="/products"
          className={`${styles.bikes__upper__link} hoverable`}
        ></Link>
      )}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className={styles.swiper}
        navigation={false}
      >
        {cartsContent.map((card, index) => (
          <SwiperSlide key={index}>
            <CartCard
              data={""}
              name={card.name}
              title={card.title}
              paragraph={card.paragraph}
              photo={card.image}
              href={card.href}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <PopupMobile />
    </>
  );
};
