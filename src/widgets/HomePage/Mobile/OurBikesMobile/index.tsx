
import React from "react";
import Button from "@shared/ui/Button";
import Image from "next/image";
import { CartCardSwiper } from "@features/CartCardSwiper";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const OurBikesMobile = () => {
  return (
    <section className={styles.our_bikes_mob}>
      <h6>
        <strong>Our Bikes</strong>
      </h6>
      <CartCardSwiper/>
    </section>
  );
};
