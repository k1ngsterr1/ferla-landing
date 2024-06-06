import React from "react";
import styles from "./styles.module.scss";
import Link from "next/link";

interface IButtonLink {
  margin?: string;
  text: string;
  animation?: string;
  href: string;
  buttonType: "filled" | "outline";
  zIndex?: string;
}

const LinkButton: React.FC<IButtonLink> = ({
  margin,
  text,
  href,
  animation,
  buttonType,
  zIndex,
  ...rest
}) => {
  const linkClass = `${styles.link} hoverable ${
    styles["link--" + buttonType]
  } ${margin || ""} ${zIndex}`;

  return (
    <Link className={linkClass} {...rest} href={href} scroll={true} passHref>
      {text}
    </Link>
  );
};

export default LinkButton;
