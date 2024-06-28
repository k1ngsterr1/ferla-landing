"use client";
import React from "react";
import { blogContent } from "@shared/lib/content/blogContent";
import { BlogCard } from "@entities/BlogCard";

import styles from "./styles.module.scss";
import { useGetBlogs } from "@shared/lib/hooks/useGetBlogs";

interface IBlog {
  data: any;
}

export const Blog: React.FC<IBlog> = ({ data }) => {
  const { blogData } = useGetBlogs();

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
        {blogData?.map((card: any, index: number) => (
          <div className={styles.blog__content__card} key={index}>
            <BlogCard
              data={data}
              title={card.title}
              href={card.href}
              image={card.image}
              key={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
