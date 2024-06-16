import React from "react";
import Image from "next/image";
import illustration from "@assets/vectors/illustrations.svg";
import { clientContent } from "@shared/lib/content/clientsContent";

import styles from "./styles.module.scss";

interface IPartnersScreen {
  data: any;
}

export const PartnersScreen: React.FC<IPartnersScreen> = ({ data }) => {
  return (
    <section className={styles.partners} id="partners">
      <div className={styles.partners__upper}>
        <Image
          src={illustration}
          className={styles.partners__upper__image}
          alt="Illustration"
        />
        <h5 className={styles.partners__upper__heading}>
          {/* Partnering with Industry Giants <br />
          <strong className="text-red">Ferla’s {""}</strong>
          Trusted Collaborators */}
          {data.components && data.components["35"]
            ? data.components["35"].value
            : "Partnering with Industry Giants Ferla’s Trusted Collaborators"}
        </h5>
      </div>
      <div className={styles.partners__images}>
        {clientContent.map((image, index) => (
          <Image
            width={"256"}
            height={"256"}
            src={
              data.components && data.components[`${36 + index}`]
                ? data.components[`${36 + index}`].value
                : image.image
            }
            alt={image.alt}
            key={index}
            className={styles.partners__images__image}
          />
        ))}
      </div>
    </section>
  );
};
