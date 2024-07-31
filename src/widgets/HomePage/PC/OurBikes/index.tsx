"use client";
import React from "react";
import { CartCard } from "@entities/CartCard";
import { Popup } from "@entities/Popup";
import { useGetCarts } from "@shared/lib/hooks/useGetCarts";
import Link from "next/link";

import styles from "./styles.module.scss";
import { cartsContent } from "@shared/lib/content/cartsContent";

interface IOurBikesScreen {
  allBikes: boolean;
}

export const OurBikes: React.FC<IOurBikesScreen> = ({ allBikes }) => {
  return (
    <section className={styles.bikes} id="bikes">
      <div className={styles.bikes__upper}>
        {allBikes && (
          <Link
            href="/products"
            className={`${styles.bikes__upper__link} hoverable`}
          >
            All Bikes
          </Link>
        )}
        <h6 className={styles.bikes__upper__heading}>Our Bikes</h6>
      </div>
      <div className={styles.bikes__cards}>
        {cartsContent?.map((card: any, index: number) => (
          <CartCard
            title={card.name}
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
