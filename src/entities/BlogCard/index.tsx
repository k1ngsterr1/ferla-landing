import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export interface IBlogCard {
  title: string;
  image: string | StaticImageData;
  href: string;
  data?: any;
}

export const BlogCard: React.FC<IBlogCard> = ({ title, href, image, data }) => {
  return (
    <div className={`${styles.blog_card} hoverable`}>
      <Image src={image} alt={title} className={styles.blog_card__image} />
      <span className={styles.blog_card__title}>{title}</span>
      <Link href={href} className={`${styles.blog_card__link} hoverable`}>
        {data?.components && data?.components["55"]
          ? data?.components["55"].value
          : "Fresh From Our Blog"}{" "}
      </Link>
    </div>
  );
};
