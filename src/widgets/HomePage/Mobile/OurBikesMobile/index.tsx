import React from "react";
import { CartCardSwiper } from "@features/CartCardSwiper";

import styles from "./styles.module.scss";

interface IOurBikesScreen {
  allBikes: boolean;
  data: any;
}

export const OurBikesMobile: React.FC<IOurBikesScreen> = ({ data }) => {
  return (
    <section className={styles.our_bikes_mob}>
      <h6>
        {data.components &&
        data.components["45"] &&
        data.components["45"].value.split("Our").length > 0 ? (
          <>
            {data.components["45"].value.split("Bikes")[0]}
            <strong className="text-red">Bikes</strong>
            {data.components["45"].value.split("Bikes")[1]}
          </>
        ) : (
          "Our Bikes"
        )}
      </h6>
      <CartCardSwiper allBikes={true} />
    </section>
  );
};
