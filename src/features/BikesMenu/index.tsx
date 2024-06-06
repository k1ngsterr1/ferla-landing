import React from "react";
import { cartsMenuContent } from "@shared/lib/content/bikesMenuContent";

import styles from "./styles.module.scss";
import { BikeMenuCard } from "@entities/BikeMenuCard";

interface IBikesMenu {
  onMouseLeave: () => void;
}

export const BikesMenu: React.FC<IBikesMenu> = ({ onMouseLeave }) => {
  return (
    <div className={styles.bikes_menu} onMouseLeave={onMouseLeave}>
      <div className={styles.bikes_menu__content}>
        <div className={styles.bikes_menu__content__cards}>
          {cartsMenuContent.map((card, index) => (
            <BikeMenuCard
              name={card.name}
              image={card.image}
              href={card.href}
              key={index}
            />
          ))}
        </div>
        <span className={styles.bikes_menu__content__separator} />
        <div className="flex flex-col items-center gap-2">
          <button className={`${styles.bikes_menu__content__button} hoverable`}>
            Coffee Bikes
          </button>
          <button className={`${styles.bikes_menu__content__button} hoverable`}>
            Coffee Carts
          </button>
          <button className={`${styles.bikes_menu__content__button} hoverable`}>
            Ferla Carts
          </button>
        </div>
      </div>
    </div>
  );
};
