"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartCard } from "@entities/CartCard";
import { useGetCarts } from "@shared/lib/hooks/Get/useGetCarts";
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
  const { carts } = useGetCarts();

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
        {carts?.map((card, index) => (
          <SwiperSlide key={index}>
            <CartCard
              name={card.name}
              title={card.name}
              description={card.description}
              img_url={card.img_url}
              key={index}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <PopupMobile />
    </>
  );
};
