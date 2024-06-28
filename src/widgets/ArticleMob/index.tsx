import React from "react";
import styles from "./styles.module.scss";

interface IArticleProps {
  content: any;
}

export const ArticleMob: React.FC<IArticleProps> = ({ content }) => {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className={styles.blog}
    />
  );
};
