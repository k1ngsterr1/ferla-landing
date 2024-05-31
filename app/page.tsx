import React from "react";
import { Header } from "@features/Header";
import { MainScreen } from "@widgets/HomePage/Main";
import { BusinessBlock } from "@widgets/HomePage/BusinessBlock";
import { BestSellers } from "@widgets/HomePage/BestSellers";
import { BikesEverywhere } from "@widgets/HomePage/BikesEverywhere";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainScreen />
      <BusinessBlock />
      <BestSellers />
      <BikesEverywhere />
    </div>
  );
};

export default HomePage;
