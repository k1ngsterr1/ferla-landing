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
import { MainScreenMobile } from "@widgets/HomePage/Mobile/MainScreenMob";
import { BusinessBlockMobile } from "@widgets/HomePage/Mobile/BusinessBlockMobile";
import { BestSellersMobile } from "@widgets/HomePage/Mobile/BestSellersMobile";
import { BikesEverywhereMobile } from "@widgets/HomePage/Mobile/BikeEverywhereMobile";
import { PartnersScreenMobile } from "@widgets/HomePage/Mobile/PartnersScreenMobile";
import { ManageScreenMobile } from "@widgets/HomePage/Mobile/ManageScreenMobile";
import { OurBikesMobile } from "@widgets/HomePage/Mobile/OurBikesMobile";
import { ReviewsMobile } from "@widgets/HomePage/Mobile/ReviewsScreenMobile";

import styles from "./styles.module.scss";
import { VideoBlock } from "@widgets/HomePage/PC/VideoBlock";
import { Blog } from "@widgets/HomePage/PC/Blog";
import { EmailForm } from "@features/EmailForm";
import { Form } from "@widgets/HomePage/PC/Form";
import { Cursor } from "@shared/ui/Cursor";
import { Footer } from "@features/Footer";

const HomePage = () => {
  return (
    <>
      <div className={styles.pc}>
        <Header />
        <Cursor />
        <MainScreen />
        <BusinessBlock />
        <BestSellers />
        <BikesEverywhere />
        <PartnersScreen />
        <ManageScreen />
        <OurBikes />
        <Reviews />
        <VideoBlock />
        <Blog />
        <EmailForm />
        <Form />
        <Footer />
      </div>
      <div className={styles.mob}>
        <MainScreenMobile />
        <BusinessBlockMobile />
        <BestSellersMobile />
        <BikesEverywhereMobile/>
        <PartnersScreenMobile/>
        <ManageScreenMobile/>
        <OurBikesMobile/>
        <ReviewsMobile/>
        <VideoBlock/>
        <Blog/>
      </div>
    </>
  );
};

export default HomePage;
