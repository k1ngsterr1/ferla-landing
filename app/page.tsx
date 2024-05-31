import React from "react";
import { Header } from "@features/Header";
import { MainScreen } from "@widgets/HomePage/Main";
import { BusinessBlock } from "@widgets/HomePage/BusinessBlock";
import { BestSellers } from "@widgets/HomePage/BestSellers";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainScreen />
      <BusinessBlock />
      <BestSellers />
    </div>
  );
};

export default HomePage;
