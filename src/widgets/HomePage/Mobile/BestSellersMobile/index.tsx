import React from "react";
import Image from "next/image";
import Button from "@shared/ui/Button";
import { MiniText } from "@shared/ui/MiniText";

import styles from "./styles.module.scss";

export const BestSellersMobile = () => {
  return (
    <section className={styles.best_sellers_mob}>
        <div className={styles.best_sellers_mob__text}>
        <MiniText text="Best Sellers" />
            <h3 className='mt-4'>
                <strong>Your Business, Your Cart, Your Way</strong>
            </h3>
            <p className={styles.best_sellers_mob__text_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    </section>
  )
}