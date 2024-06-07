import React from "react";
import { Blog as BlogBlock } from "@widgets/HomePage/PC/Blog";
import { Header } from "@features/Header";
import { Footer } from "@features/Footer";
import { Cursor } from "@shared/ui/Cursor";

import styles from "../styles.module.scss";
import { EmailForm } from "@features/EmailForm";
import { Form } from "@widgets/HomePage/PC/Form";

const Blog = () => {
  return (
    <>
      <Header />
      <Cursor />
      <div className={`${styles.pc} mt-8`}>
        <div className="flex mt-32">
          <EmailForm />
        </div>
        <BlogBlock />
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default Blog;
