import React from "react";
import { useReload } from "@/app/Context/ReloadContext";

import styles from "./CardActions.module.css";
import { deleteUserByUsername } from "../../api/usersApi";

export default function CardActions(props) {
  const { username } = props;
  const { triggerReload } = useReload();

  const handleFirstAction = () => {};

  const handleSecondAction = async () => {
    if (username) {
      try {
        await deleteUserByUsername(username);
        triggerReload();
      } catch (error) {
        return null;
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
