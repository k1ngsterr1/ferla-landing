import React from "react";
import TrustIndexWidget from "@features/TrustIndexWidget";

import styles from "./styles.module.scss";

const Reviews = () => {
  return (
    <section className={styles.reviews} id="reviews">
      <h6 className={styles.reviews__heading}>Reviews</h6>
      {/* <p className={styles.reviews__paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </p> */}
      <TrustIndexWidget />
    </section>
  );
};

export default Reviews;
