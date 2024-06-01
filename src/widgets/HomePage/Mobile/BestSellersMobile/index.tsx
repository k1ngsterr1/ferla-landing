'use client'

import React from "react";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";
import { AboutCard } from "@entities/AboutCard";
import { content } from "@shared/lib/content/aboutCardContent";
import { Swiper, SwiperSlide } from "swiper/react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const BestSellersMobile = () => {
  return (
    <section className={styles.best_sellers_mob}>
        <div className={styles.best_sellers_mob__text}>
        <MiniText text="Best Sellers" />
            <h3 className='mt-4'>
                <strong>Your Business, Your Cart, Your Way</strong>
            </h3>
            <p className={styles.best_sellers_mob__text_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className={styles.best_sellers_mob__swiper}>
        <Swiper
        spaceBetween={20}
        slidesPerView={1}
        className={styles.best_sellers_mob__swiper_container}
        navigation={false}
      >
        {content.map((item, index) => (
          <SwiperSlide
            key={index}
          >
            <AboutCard
              name={item.name}
              icon={item.icon}
              text={item.text}
            />
          </SwiperSlide>
        ))}
        </Swiper>
        </div>
        <Button
          text="Manage Your Business"
          buttonType="transparent"
          margin="mt-8"
          icon={faChevronRight}
        />
    </section>
  )
}