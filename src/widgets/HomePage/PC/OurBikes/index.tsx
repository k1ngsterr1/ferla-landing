"use client";
import React from "react";
import { cartsContent } from "@shared/lib/content/cartsContent";
import { CartCard } from "@entities/CartCard";
import { Popup } from "@entities/Popup";
import { useGetCarts } from "@shared/lib/hooks/useGetCarts";

import styles from "./styles.module.scss";

interface IOurBikesScreen {
  allBikes: boolean;
  data: any;
}

export const OurBikes: React.FC<IOurBikesScreen> = ({ allBikes, data }) => {
  const { cartsData } = useGetCarts();

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
          data.components["49"] &&
          data.components["49"].value.split("Our").length > 0 ? (
            <>
              {data.components["49"].value.split("Bikes")[0]}
              <strong className="text-red">Bikes</strong>
              {data.components["49"].value.split("Bikes")[1]}
            </>
          ) : (
            "Our Bikes"
          )}
        </h6>
      </div>
      <div className={styles.bikes__cards}>
        {cartsData?.map((card: any, index: number) => (
          <CartCard
            data={data}
            title={card.title}
            name={card.name}
            paragraph={card.paragraph}
            photo={card.img_url}
            href={"test"}
            key={index}
          />
        ))}
      </div>
      <Popup />
    </section>
  );
};
