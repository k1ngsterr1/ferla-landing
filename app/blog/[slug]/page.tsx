"use client";

import React from "react";

import { Footer } from "@features/Footer";
import { Header } from "@features/Header";
import { Cursor } from "@shared/ui/Cursor";
import { Article } from "@widgets/Article";
import { useGetArticles } from "@shared/lib/hooks/useGetArticle";
import { useParams } from "next/navigation";

import styles from "./styles.module.scss";
import { HeaderMobile } from "@features/HeaderMobile";
import { FooterMobile } from "@features/FooterMobile";
import { Loading } from "@features/Loader";

interface IBlogPageProps {
  title: string;
}

const BlogPage = () => {
  const { slug } = useParams();
  const { articleData, isLoading } = useGetArticles(slug);

  return (
    <>
      {isLoading && <Loading />}
      <div className={styles.pc}>
        <Header />
        <Cursor />
        <Article content={articleData} />
        <Footer />
      </div>
      <div className={styles.mob}>
        <HeaderMobile />
        <Article content={articleData} />
        <FooterMobile />
      </div>
    </>
  );
};

export default BlogPage;
