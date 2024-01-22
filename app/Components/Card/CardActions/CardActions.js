"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { redirect } from "next/navigation";
import { useReload } from "@/app/Context/ReloadContext";

import styles from "./CardActions.module.css";

export default function CardActions(props) {
  const { username } = props;
  const router = useRouter();
  const { triggerReload } = useReload();

  const handleFirstAction = () => {
    router.push(`/user/${username}`);
  };

  const handleSecondAction = async () => {
    if (username) {
      try {
        await deleteUserByUsername(username);
        triggerReload();
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
      }
    }
  };

  return (
    <div className={styles.actionsButtons}>
      <button className={styles.firstButton} onClick={handleFirstAction}>
        Detalles
      </button>
      <button className={styles.secondButton} onClick={handleSecondAction}>
        Eliminar
      </button>
    </div>
  );
}
