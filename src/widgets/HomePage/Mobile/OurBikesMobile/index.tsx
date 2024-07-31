import React from "react";
import { CartCardSwiper } from "@features/CartCardSwiper";

import styles from "./styles.module.scss";

interface IOurBikesScreen {
  allBikes: boolean;
}

export const OurBikesMobile: React.FC<IOurBikesScreen> = () => {
  return (
    <section className={styles.our_bikes_mob}>
      <h6>
        Our <span className="text-red">Bikes</span>
      </h6>
      <CartCardSwiper allBikes={true} />
    </section>
  );
};
