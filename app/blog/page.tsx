import React from "react";
import { Blog as BlogBlock } from "@widgets/HomePage/PC/Blog";
import { Header } from "@features/Header";
import { Footer } from "@features/Footer";
import { Cursor } from "@shared/ui/Cursor";

import styles from "../styles.module.scss";
import { EmailForm } from "@features/EmailForm";
import { Form } from "@widgets/HomePage/PC/Form";

async function getData() {
  const res = await fetch(
    "https://ferla-backend-production.up.railway.app/api/components/get-components",
    { cache: "force-cache", next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <>
      <Header />
      <Cursor />
      <div className={`${styles.pc} mt-8`}>
        <div className="flex mt-32">
          <EmailForm data={data} />
        </div>
        <BlogBlock data={data} />
      </div>
      <Form data={data} />
      <Footer />
    </>
  );
};

export default Blog;
