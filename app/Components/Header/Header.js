import React from "react";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/");
  };

  return (
    <div className={styles.header}>
      <p onClick={handleClick}>Header</p>
    </div>
  );
}
