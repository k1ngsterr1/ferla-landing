import React from "react";
import { cartsContent } from "@shared/lib/content/cartsContent";
import { CartCard } from "@entities/CartCard";

import styles from "./styles.module.scss";

export const OurBikes = () => {
  return (
    <section className={styles.bikes} id="bikes">
      <div className={styles.bikes__upper}>
        <h6 className={styles.bikes__upper__heading}>
          Our <strong className="text-red">Bikes</strong>
        </h6>
      </div>
      <div className={styles.bikes__cards}>
        {cartsContent.map((card, index) => (
          <CartCard
            name={card.name}
            photo={card.image}
            href={card.href}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};
