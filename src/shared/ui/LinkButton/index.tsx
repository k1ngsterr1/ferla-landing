import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

interface IButtonLink {
  margin?: string;
  text: string;
  href: string;
  buttonType: "filled" | "outline";
}

const LinkButton: React.FC<IButtonLink> = ({
  margin,
  text,
  href,
  buttonType,
  ...rest
}) => {
  const linkClass = `${styles.link} hoverable ${
    styles["link--" + buttonType]
  } ${margin || ""}`;

  return (
    <Link className={linkClass} {...rest} href={href} scroll={false}>
      {text}
    </Link>
  );
};

export default LinkButton;
