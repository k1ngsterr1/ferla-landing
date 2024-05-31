import React from "react";

import { Header } from "@features/Header";

import { MainScreen } from "@widgets/HomePage/Main";
import { MainScreenMob } from "@widgets/HomePage/MainScreenMob";

import { BusinessBlock } from "@widgets/HomePage/BusinessBlock";
import { BusinessBlockMobile } from "@widgets/BusinessBlockMobile";

import { BestSellers } from "@widgets/HomePage/BestSellers";

import styles from './styles.module.scss'

const HomePage = () => {
  return (
    <>
    <div className={styles.pc}>
      <Header />
      <MainScreen />
      <BusinessBlock />
      <BestSellers />
    </div>
    <div className={styles.mob}>
      <MainScreenMob/>
      <BusinessBlockMobile/>
    </div>
  </>
  );
};

export default HomePage;
