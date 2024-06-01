import React from "react";

// PC
import { Header } from "@features/Header";
import { MainScreen } from "@widgets/HomePage/PC/Main";
import { BusinessBlock } from "@widgets/HomePage/PC/BusinessBlock";
import { BikesEverywhere } from "@widgets/HomePage/PC/BikesEverywhere";
import { PartnersScreen } from "@widgets/HomePage/PC/Partners";
import { ManageScreen } from "@widgets/HomePage/PC/ManageScreen";
import { OurBikes } from "@widgets/HomePage/PC/OurBikes";
import { Reviews } from "@widgets/HomePage/Reviews";
import { BestSellers } from "@widgets/HomePage/PC/BestSellers";

// MOB
import { MainScreenMob } from "@widgets/HomePage/Mobile/MainScreenMob";
import { BusinessBlockMobile } from "@widgets/HomePage/Mobile/BusinessBlockMobile";
import { BestSellersMobile } from "@widgets/HomePage/Mobile/BestSellersMobile";

import styles from "./styles.module.scss";
import { VideoBlock } from "@widgets/HomePage/PC/VideoBlock";

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
        {/* <Reviews /> */}
        <Reviews />
        <VideoBlock />
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
