import React from "react";
import styles from "./CardFooter.module.css";

export default function CardFooter(props) {
  const { username } = props;
  return (
    <div className={styles.cardInfo}>
      <p>{username}</p>
    </div>
  );
}
