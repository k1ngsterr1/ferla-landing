import React from "react";
import { MiniText } from "@shared/ui/MiniText";

import styles from './styles.module.scss'

export const BikesEverywhereMobile = () => {
    return (
        <section className={styles.bikes_everywhere_mob}>
                <div className={styles.bikes_everywhere_mob__text}>
                    <h2 className={styles.bikes_everywhere_mob__text_heading}>
                        Ferla Bikes<strong className="text-red">everywhere</strong>
                    </h2>
                    <p className={styles.bikes_everywhere_mob__text_paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
        </section>    
    )
}