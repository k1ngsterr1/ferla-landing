"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReviewCard } from "@entities/ReviewCard";
import { reviewCardContent } from "@shared/lib/content/reviewsContent";
import SwiperButton from "@shared/ui/SwiperButtons";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const ReviewSwiper = () => {
  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={3}
        className={`${styles.review_swiper} !w-[100%]`}
        navigation={false}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
          console.log(swiper);
        }}
      >
        {reviewCardContent.map((review, index) => (
          <SwiperSlide
            className={styles.review_swiper__slides__slide}
            key={index}
          >
            <ReviewCard
              name={review.name}
              photo={review.photo}
              undername={review.undername}
              alt={review.alt}
              text={review.text}
            />
          </SwiperSlide>
        ))}
        <SwiperButton
          direction="prev"
          position="left-0"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <SwiperButton
          direction="next"
          position="right-0"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </Swiper>
    </>
  );
};
