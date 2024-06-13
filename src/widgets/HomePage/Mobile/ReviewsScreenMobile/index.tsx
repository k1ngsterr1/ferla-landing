import React from "react";
import TrustIndexWidget from "@features/TrustIndexWidget";

import styles from "./styles.module.scss";
import TrustIndexMob from "@features/TrustIndexMob";

interface IReviews {
  data: any;
}

export const ReviewsMobile: React.FC<IReviews> = ({ data }) => {
  return (
    <section className={styles.reviews_mob} id="reviews-mob">
      <h6>
        {data.components && data.components["46"]
          ? data.components["46"].value
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </h6>
      <p className={styles.reviews_mob__paragraph}>
        {data.components && data.components["47"]
          ? data.components["47"].value
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </p>
      <TrustIndexMob />
    </section>
  );
};
