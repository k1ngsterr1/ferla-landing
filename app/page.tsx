import React from "react";
import { Header } from "@features/Header";
import { MainScreen } from "@widgets/HomePage/Main";
import { BusinessBlock } from "@widgets/HomePage/BusinessBlock";

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainScreen />
      <BusinessBlock />
    </div>
  );
};

export default HomePage;
