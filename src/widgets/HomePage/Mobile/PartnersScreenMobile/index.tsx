import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { clientContent } from "@shared/lib/content/clientsContent";

import styles from './styles.module.scss'

import planet from '@assets/vectors/illustrations.svg'

export const PartnersScreenMobile = () => {
    return (
        <section className={styles.partners_mob}>
            <div className={styles.partners_mob__content}>
                <h5 className={styles.partners_mob__content__heading}>
                    Partnering with Industry Giants <strong className="text-red">Ferla’s</strong> Trusted Collaborators
                </h5>
                <Image src={planet} alt="planet" className={styles.partners_mob__content__image} />
            </div>
            <Marquee speed={100} className="mt-12">
                {clientContent.map((image, index) => (
                    <Image src={image.image} alt={image.alt} key={index} className={styles.partners_mob__marquee}/>
                ))}
            </Marquee>
        </section>
    )
}
