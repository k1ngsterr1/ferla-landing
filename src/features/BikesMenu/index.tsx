import React, { useRef, useEffect } from "react";
import { cartsMenuContent } from "@shared/lib/content/bikesMenuContent";
import { BikeMenuCard } from "@entities/BikeMenuCard";

import styles from "./styles.module.scss";

interface IBikesMenu {
  onMouseLeave: () => void;
  setMenuRef: any;
}

export const BikesMenu: React.FC<IBikesMenu> = ({
  onMouseLeave,
  setMenuRef,
}) => {
  const localRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (localRef.current) {
      setMenuRef(localRef.current);
    }
  }, [setMenuRef]);

  return (
    <div
      className={styles.bikes_menu}
      onMouseLeave={onMouseLeave}
      ref={localRef}
    >
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
