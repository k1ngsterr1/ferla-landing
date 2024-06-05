"use client";
import React, { useState } from "react";
import Image from "next/image";
import illustration from "@assets/vectors/illustrations.svg";
import { clientContent } from "@shared/lib/content/clientsContent";

import styles from "./styles.module.scss";
import { ImageForm } from "@entities/ClientComponents/ImageForm";

export const PartnersScreen = () => {
  const [imageFormVisible, setImageFormVisible] = useState<boolean>(false);

  const handleImageFormVisible = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    setImageFormVisible(!imageFormVisible);
  };

  return (
    <>
      {imageFormVisible && (
        <ImageForm
          onClick={(e: React.SyntheticEvent) => handleImageFormVisible(e)}
        />
      )}
      <section className={styles.partners} id="partners">
        <div className={styles.partners__upper}>
          <Image
            src={illustration}
            className={styles.partners__upper__image}
            alt="Illustration"
          />
          <h5 className={styles.partners__upper__heading}>
            Partnering with Industry Giants <br />
            <strong className="text-red">Ferla’s {""}</strong>
            Trusted Collaborators
          </h5>
        </div>
        <div className={styles.partners__images}>
          {clientContent.map((image, index) => (
            <Image
              onClick={handleImageFormVisible}
              src={image.image}
              alt={image.alt}
              key={index}
              className={styles.partners__images__image}
            />
          ))}
        </div>
      </section>
    </>
  );
};
