import React from "react";

// PC
import { Header } from "@features/Header";
import { MainScreen } from "@widgets/HomePage/PC/Main";
import { BusinessBlock } from "@widgets/HomePage/PC/BusinessBlock";
import { BikesEverywhere } from "@widgets/HomePage/PC/BikesEverywhere";
import { PartnersScreen } from "@widgets/HomePage/PC/Partners";
import { ManageScreen } from "@widgets/HomePage/PC/ManageScreen";
import { OurBikes } from "@widgets/HomePage/PC/OurBikes";
import { BestSellers } from "@widgets/HomePage/PC/BestSellers";
import { VideoBlock } from "@widgets/HomePage/PC/VideoBlock";
import { Blog } from "@widgets/HomePage/PC/Blog";
import { EmailForm } from "@features/EmailForm";
import { Form } from "@widgets/HomePage/PC/Form";
import { Cursor } from "@shared/ui/Cursor";
import { Footer } from "@features/Footer";
import { ProgressBar } from "@shared/ui/ProgressBar";
import { CalculatorBlock } from "@widgets/HomePage/PC/CalculatorBlock";

// MOB
import { HeaderMobile } from "@features/HeaderMobile";
import { MainScreenMobile } from "@widgets/HomePage/Mobile/MainScreenMob";
import { BusinessBlockMobile } from "@widgets/HomePage/Mobile/BusinessBlockMobile";
import { BestSellersMobile } from "@widgets/HomePage/Mobile/BestSellersMobile";
import { BikesEverywhereMobile } from "@widgets/HomePage/Mobile/BikeEverywhereMobile";
import { PartnersScreenMobile } from "@widgets/HomePage/Mobile/PartnersScreenMobile";
import { ManageScreenMobile } from "@widgets/HomePage/Mobile/ManageScreenMobile";
import { OurBikesMobile } from "@widgets/HomePage/Mobile/OurBikesMobile";
// import { ReviewsMobile } from "@widgets/HomePage/Mobile/ReviewsScreenMobile";
import { EmailFormMobile } from "@widgets/HomePage/Mobile/EmailFormMobile";
import { FormMobile } from "@widgets/HomePage/Mobile/FormMobile";
import { FooterMobile } from "@features/FooterMobile/index";
import dynamic from "next/dynamic";

import styles from "./styles.module.scss";

const LazyReviews = dynamic(
  () => import("../src/widgets/HomePage/PC/Reviews/index"),
  {
    loading: () => <p>Loading...</p>,
    ssr: false,
  }
);

const HomePage = async () => {
  return (
    <>
      <div className={styles.pc}>
        <ProgressBar />
        <Header />
        <Cursor />
        <MainScreen />
        <BusinessBlock />
        <BestSellers />
        <BikesEverywhere />
        <PartnersScreen />
        <ManageScreen />
        <OurBikes allBikes={true} />
        <LazyReviews />
        <VideoBlock id="video" />
        <Blog />
        <EmailForm />
        <CalculatorBlock />
        <Form />
        <Footer />
      </div>
      <div className={styles.tablet}></div>
      <div className={styles.mob}>
        <HeaderMobile />
        <MainScreenMobile />
        <BusinessBlockMobile />
        <BestSellersMobile />
        <BikesEverywhereMobile />
        <PartnersScreenMobile />
        <ManageScreenMobile />
        <OurBikesMobile allBikes />
        {/* <ReviewsMobile  /> */}
        <VideoBlock id="video-mob" />
        <Blog />
        <EmailFormMobile />
        <CalculatorBlock />
        <FormMobile />
        <FooterMobile />
      </div>
    </>
  );
};

export default HomePage;
