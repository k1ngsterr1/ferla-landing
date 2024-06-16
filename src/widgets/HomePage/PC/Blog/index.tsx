import React from "react";
import { blogContent } from "@shared/lib/content/blogContent";
import { BlogCard } from "@entities/BlogCard";

import styles from "./styles.module.scss";

interface IBlog {
  data: any;
}

export const Blog: React.FC<IBlog> = ({ data }) => {
  return (
    <section className={styles.blog}>
      <div className={styles.blog__upper}>
        <h6 className={styles.blog__upper__heading}>
          {data?.components && data?.components["54"]
            ? data?.components["54"].value
            : "Fresh From Our Blog"}
        </h6>
      </div>
      <div className={styles.blog__content}>
        {blogContent.map((card, index) => (
          <div className={styles.blog__content__card} key={index}>
            <BlogCard
              data={data}
              title={card.title}
              href={"test"}
              image={card.image}
              key={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
