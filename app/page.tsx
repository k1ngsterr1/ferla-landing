import React from "react";

import { Header } from "@features/Header";

import { MainScreen } from "@widgets/HomePage/PC/Main";
import { MainScreenMob } from "@widgets/HomePage/Mobile/MainScreenMob";

import { BusinessBlock } from "@widgets/HomePage/PC/BusinessBlock";
import { BusinessBlockMobile } from "@widgets/HomePage/Mobile/BusinessBlockMobile";

import { BikesEverywhere } from "@widgets/HomePage/BikesEverywhere";
import { PartnersScreen } from "@widgets/HomePage/Partners";
import { ManageScreen } from "@widgets/HomePage/ManageScreen";
import { OurBikes } from "@widgets/HomePage/OurBikes";
import { Reviews } from "@widgets/HomePage/Reviews";
import { BestSellers } from "@widgets/HomePage/PC/BestSellers";
import { BestSellersMobile } from "@widgets/HomePage/Mobile/BestSellersMobile";

import styles from "./styles.module.scss";

const HomePage = () => {
  return (
    <>
      <div className={styles.pc}>
        <Header />
        <MainScreen />
        <BusinessBlock />
        <BestSellers />
        <BikesEverywhere />
        <PartnersScreen />
        <ManageScreen />
        <OurBikes />
        <Reviews />
      </div>
      <div className={styles.mob}>
        <MainScreenMob />
        <BusinessBlockMobile />
        <BestSellersMobile />
      </div>
    </>
  );
};

export default HomePage;
