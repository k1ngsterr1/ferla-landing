import React from "react";
import Button from "@shared/ui/Button";
import Link from "next/link";
import image from "@assets/webp/pc/mainImage_pc.webp";
import dynamic from "next/dynamic";

import styles from "./styles.module.scss";

const HeavyImage = dynamic(() => import("../LazyImage/main"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

interface IMainScreen {
  data: any;
}

export const MainScreen: React.FC<IMainScreen> = ({ data }) => {
  console.log(data.components["4"].value);

  return (
    <main className={styles.main_screen} id="home">
      <h1 className={`${styles.main_screen__heading} animate__fadeInLeft`}>
        {/* Let us introduce <strong className="text-red">ferla bikes</strong> */}
        {data.components && data.components["0"]
          ? data.components["0"].value
          : "Let Us Introduce Ferla bikes"}
      </h1>
      <p className={styles.main_screen__paragraph}>
        {/* From Coffee Bikes and Ice Cream Bikes to Marketing & Promo Bikes,
        Hospitality Bikes, Vending Carts and more, we provide the perfect
        solution for your mobile retail pop-up. */}
        {data.components && data.components["2"]
          ? data.components["2"].value
          : "From Coffee Bikes and Ice Cream Bikes to Marketing & Promo Bikes, Hospitality Bikes, Vending Carts and more, we provide the perfect solution for your mobile retail pop-up."}
      </p>
      <Button
        text="Get A Free Consultation"
        animation="fade-reveal-left"
        buttonType="filled"
        targetId="form-pc"
        margin="mt-8"
      />
      <Link className={`${styles.main_screen__link} hoverable`} href="#video">
        {data.components && data.components["3"]
          ? data.components["3"].value
          : "Watch the true story"}
      </Link>
      <HeavyImage
        src={
          data.components && data.components["4"]
            ? data.components["4"].value
            : image
        }
      />
    </main>
  );
};
