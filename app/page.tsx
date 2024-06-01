import React from "react";

import { Header } from "@features/Header";

import { MainScreen } from "@widgets/HomePage/Main";
import { MainScreenMob } from "@widgets/HomePage/MainScreenMob";

import { BusinessBlock } from "@widgets/HomePage/BusinessBlock";
import { BusinessBlockMobile } from "@widgets/BusinessBlockMobile";

import { BestSellers } from "@widgets/HomePage/BestSellers";
import { BikesEverywhere } from "@widgets/HomePage/BikesEverywhere";
import { PartnersScreen } from "@widgets/HomePage/Partners";
import { ManageScreen } from "@widgets/HomePage/ManageScreen";
import { OurBikes } from "@widgets/HomePage/OurBikes";
import { Reviews } from "@widgets/HomePage/Reviews";

import styles from './styles.module.scss'

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
      <MainScreenMob/>
      <BusinessBlockMobile/>
    </div>
  </>
  );
};

export default HomePage;
