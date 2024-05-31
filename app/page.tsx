import React from "react";
import { Header } from "@features/Header";
import { MainScreen } from "@widgets/HomePage/Main";
import { MainScreenMob } from "@widgets/HomePage/MainScreenMob";
import { BusinessBlock } from "@widgets/HomePage/BusinessBlock";
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
    </div>
  </>
  );
};

export default HomePage;
