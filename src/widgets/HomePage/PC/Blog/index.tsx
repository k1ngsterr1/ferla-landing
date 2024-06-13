"use client";

import React from "react";
import { BlogCard } from "@entities/BlogCard/index";
import { useGetBlogs } from "@shared/lib/hooks/Get/useGetBlogs";

import styles from "./styles.module.scss";

interface IBlog {
  data: any;
}

export const Blog: React.FC<IBlog> = ({ data }) => {
  const { blogs, loading } = useGetBlogs();

  return (
    <section className={styles.blog}>
      <div className={styles.blog__upper}>
        <h6 className={styles.blog__upper__heading}>
          {data?.components && data?.components["49"]
            ? data?.components["49"].value
            : "Fresh From Our Blog"}
        </h6>
      </div>
      <div className={styles.blog__content}>
        {blogs?.map((blog, index) => (
          <div className={styles.blog__content__card} key={index}>
            <BlogCard
              title={blog?.title}
              href={blog?.href}
              image={blog?.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
