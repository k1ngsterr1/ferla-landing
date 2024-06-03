import React from "react";
import Button from "@shared/ui/Button";
import Image from "next/image";
import { CartCard } from "@entities/CartCard";
import { cartsContent } from "@shared/lib/content/cartsContent";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";


export const OurBikesMobile = () => {
  return (
    <section className={styles.our_bikes_mob}>
                <h6>
                    <strong>Our Bikes</strong>
                </h6>
                <div className=" gap-4">
                {cartsContent.map((card, index) => (
            <CartCard
                name={card.name}
                photo={card.image}
                href={card.href}
                key={index}
            />
            ))}
            </div>
            {/* <Button
            text="Manage Your Business"
            buttonType="transparent"
            margin="mt-8"
            icon={faChevronRight}
            /> */}
    </section>
  )
}