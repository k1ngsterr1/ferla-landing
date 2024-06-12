import React from "react";

// PC
import { Header } from "@features/Header";
import { MainScreen } from "@widgets/HomePage/PC/Main";
import { BusinessBlock } from "@widgets/HomePage/PC/BusinessBlock";
import { BikesEverywhere } from "@widgets/HomePage/PC/BikesEverywhere";
import { PartnersScreen } from "@widgets/HomePage/PC/Partners";
import { ManageScreen } from "@widgets/HomePage/PC/ManageScreen";
import { OurBikes } from "@widgets/HomePage/PC/OurBikes";
import { Reviews } from "@widgets/HomePage/PC/Reviews";
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
import { ReviewsMobile } from "@widgets/HomePage/Mobile/ReviewsScreenMobile";
import { EmailFormMobile } from "@widgets/HomePage/Mobile/EmailFormMobile";
import { FormMobile } from "@widgets/HomePage/Mobile/FormMobile";
import { FooterMobile } from "@features/FooterMobile/index";

import styles from "./styles.module.scss";

async function getData() {
  const res = await fetch(
    "https://ferla-backend-production.up.railway.app/api/components/get-components",
    { cache: "force-cache", next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HomePage = async () => {
  const data = await getData();

  return (
    <>
      <div className={styles.pc}>
        <ProgressBar />
        <Header />
        <Cursor />
        <MainScreen data={data} />
        <BusinessBlock data={data} />
        <BestSellers data={data} />
        <BikesEverywhere data={data} />
        <PartnersScreen data={data} />
        <ManageScreen data={data} />
        <OurBikes allBikes={true} data={data} />
        <Reviews data={data} />
        <VideoBlock id="video" />
        <Blog data={data} />
        <EmailForm data={data} />
        <CalculatorBlock data={data} />
        <Form data={data} />
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
        <OurBikesMobile />
        <ReviewsMobile />
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
