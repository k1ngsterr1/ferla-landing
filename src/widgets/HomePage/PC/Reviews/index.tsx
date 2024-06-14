import React from "react";
import TrustIndexWidget from "@features/TrustIndexWidget";

import styles from "./styles.module.scss";

interface IReviews {
  data: any;
}

export const Reviews: React.FC<IReviews> = ({ data }) => {
  return (
    <section className={styles.reviews} id="reviews">
      <h6 className={styles.reviews__heading}>
        {data.components && data.components["46"]
          ? data.components["46"].value
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </h6>
      <p className={styles.reviews__paragraph}>
        {data.components && data.components["47"]
          ? data.components["47"].value
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </p>
      <TrustIndexWidget />
    </section>
  );
};
