import React from "react";
import TrustIndexWidget from "@features/TrustIndexWidget";

import styles from "./styles.module.scss";

interface IReviews {
  data: any;
}

const Reviews: React.FC<IReviews> = ({ data }) => {
  return (
    <section className={styles.reviews} id="reviews">
      <h6 className={styles.reviews__heading}>
        {data.components && data.components["51"]
          ? data.components["51"].value
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </h6>
      <p className={styles.reviews__paragraph}>
        {data.components && data.components["52"]
          ? data.components["52"].value
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      </p>
      <TrustIndexWidget />
    </section>
  );
};

export default Reviews;
