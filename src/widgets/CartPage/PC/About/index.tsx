import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
        <span className={styles.cart_about__mini_text}>{miniText}</span>
        <h2 className={styles.cart_about__title}>{title}</h2>
        <p className={styles.cart_about__paragraph}>{paragraph}</p>
        <Link href="#" className={`${styles.cart_about__link} hoverable`}>
          Learn more
          <FontAwesomeIcon
            icon={faChevronRight}
            className={styles.cart_about__link__chevron}
          />
        </Link>
      </div>
    </section>
  );
};
