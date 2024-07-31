"use client";
import React from "react";
import { blogContent } from "@shared/lib/content/blogContent";
import { BlogCard } from "@entities/BlogCard";
import { useGetBlogs } from "@shared/lib/hooks/useGetBlogs";

import styles from "./styles.module.scss";

export const Blog = () => {
  const { blogData } = useGetBlogs();

  return (
    <section className={styles.blog}>
      <div className={styles.blog__upper}>
        <h6 className={styles.blog__upper__heading}>Fresh From Our Blog</h6>
      </div>
      <div className={styles.blog__content}>
        {blogContent.map((card: any, index: number) => (
          <div className={styles.blog__content__card} key={index}>
            <BlogCard
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
