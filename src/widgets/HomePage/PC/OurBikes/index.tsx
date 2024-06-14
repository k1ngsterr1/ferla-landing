import React from "react";
import { cartsContent } from "@shared/lib/content/cartsContent";
import { CartCard } from "@entities/CartCard";
import { Popup } from "@entities/Popup";
import Link from "next/link";

import styles from "./styles.module.scss";

interface IOurBikesScreen {
  allBikes: boolean;
  data: any;
}

export const OurBikes: React.FC<IOurBikesScreen> = ({ allBikes, data }) => {
  return (
    <section className={styles.bikes} id="bikes">
      <div className={styles.bikes__upper}>
        {/* {allBikes && (
          <Link
            href="/products"
            className={`${styles.bikes__upper__link} hoverable`}
          >
            All Bikes
          </Link>
        )} */}
        <h6 className={styles.bikes__upper__heading}>
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
      </div>
      <div className={styles.bikes__cards}>
        {cartsContent.map((card, index) => (
          <CartCard
            title={card.title}
            name={card.name}
            paragraph={card.paragraph}
            photo={card.image}
            href={"test"}
            key={index}
          />
        ))}
      </div>
      <Popup />
    </section>
  );
};
