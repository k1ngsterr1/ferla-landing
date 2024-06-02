import React from "react";
import Image from "next/image";
import Button from "@shared/ui/Button";

import { images } from "@shared/lib/content/bikesImagesContent";

import styles from './styles.module.scss'

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export const BikesEverywhereMobile = () => {
    return (
        <section className={styles.bikes_everywhere_mob}>
                <div className={styles.bikes_everywhere_mob__text}>
                    <h4 className={styles.bikes_everywhere_mob__text_heading}>
                        Ferla Bikes<strong className="text-red">everywhere</strong>
                    </h4>
                    <p className={styles.bikes_everywhere_mob__text_paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={styles.bikes_everywhere_mob__gallery}>
                    {images.map((image) =>
                        <Image src={image.src} className={styles.bikes_everywhere_mob__gallery_image} alt="bike"/>
                    )}
                </div>
                <Button
                    text="Start Selling"
                    buttonType="transparent"
                    margin="mt-8"
                    icon={faChevronRight}
                />
        </section>    
    )
}