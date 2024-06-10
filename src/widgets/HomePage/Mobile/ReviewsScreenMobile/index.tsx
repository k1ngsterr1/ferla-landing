import React from "react";
import TrustIndexWidget from "@features/TrustIndexWidget";

import styles from "./styles.module.scss";

export const ReviewsMobile = () => {
  return (
    <section className={styles.reviews_mob} id="reviews-mob">
      <h6>
        <strong>Reviews</strong>
      </h6>
      <p className={styles.reviews_mob__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor. Duis aute irure dolor in reprehenderit in...
      </p>
      <TrustIndexWidget />
    </section>
  );
};
