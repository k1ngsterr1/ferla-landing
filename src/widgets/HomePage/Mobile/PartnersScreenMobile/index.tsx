import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import dynamic from "next/dynamic";

import { clientContent } from "@shared/lib/content/clientsContent";

import styles from "./styles.module.scss";

const HeavyImage = dynamic(() => import("../LazyImageMobile/planet"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const PartnersScreenMobile = () => {
  return (
    <section className={styles.partners_mob} id="partners-mob">
      <div className={styles.partners_mob__content}>
        <h5 className={styles.partners_mob__content__heading}>
          Partnering with Industry Giants Ferla’s Trusted Collaborators
        </h5>
        <HeavyImage />
      </div>
      <Marquee speed={100} className="mt-12">
        {clientContent.map((image, index) => (
          <Image
            width={"256"}
            height={"256"}
            src={image.image}
            alt={image.alt}
            key={index}
            className={styles.partners_mob__marquee}
          />
        ))}
      </Marquee>
    </section>
  );
};
