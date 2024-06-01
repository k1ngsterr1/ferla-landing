import React from "react";
import { Header } from "@features/Header";
import { MainScreen } from "@widgets/HomePage/Main";
import { BusinessBlock } from "@widgets/HomePage/BusinessBlock";
import { BestSellers } from "@widgets/HomePage/BestSellers";
import { BikesEverywhere } from "@widgets/HomePage/BikesEverywhere";
import { PartnersScreen } from "@widgets/HomePage/Partners";
import { ManageScreen } from "@widgets/HomePage/ManageScreen";
import { OurBikes } from "@widgets/HomePage/OurBikes";
import { Reviews } from "@widgets/HomePage/Reviews";

const HomePage = () => {
  return (
    <div>
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
  );
};

export default HomePage;
