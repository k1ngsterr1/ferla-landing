import React from "react";
import Image, { StaticImageData } from "next/image";

import styles from "./styles.module.scss";
import Link from "next/link";

export interface IBlogCard {
  title: string;
  image: string | StaticImageData;
  href: string;
}

export const BlogCard: React.FC<IBlogCard> = ({ title, href, image }) => {
  return (
    <div className={styles.blog_card}>
      <Image src={image} alt={title} className={styles.blog_card__image} />
      <span className={styles.blog_card__title}>{title}</span>
      <Link href={href} className={styles.blog_card__link}>
        Read More
      </Link>
    </div>
  );
};
