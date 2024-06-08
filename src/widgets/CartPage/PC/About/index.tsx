"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
import { Fade } from "react-awesome-reveal";

interface ICartAboutProps {
  title: string;
  miniText: string;
  paragraph: string;
  video: string;
}

export const CartAbout: React.FC<ICartAboutProps> = ({
  title,
  miniText,
  paragraph,
  video,
}) => {
  return (
    <section className={styles.cart_about}>
      <iframe src={video} className={styles.cart_about__video} />
      <div className="flex flex-col items-start w-[50%] ml-12">
        <Fade delay={100} direction="right">
          <span className={styles.cart_about__mini_text}>{miniText}</span>
        </Fade>
        <Fade delay={150} direction="right">
          <h2 className={styles.cart_about__title}>{title}</h2>
        </Fade>
        <Fade delay={200} direction="right">
          <p className={styles.cart_about__paragraph}>{paragraph}</p>
        </Fade>
        <Fade delay={250} direction="right">
          <button className={`${styles.cart_about__link} hoverable`}>
            Learn more
            <FontAwesomeIcon
              icon={faChevronRight}
              className={styles.cart_about__link__chevron}
            />
          </button>
        </Fade>
      </div>
    </section>
  );
};
