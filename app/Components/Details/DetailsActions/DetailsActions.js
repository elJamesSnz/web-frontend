import React from "react";
import styles from "./DetailsActions.module.css";

export default function DetailsActions() {
  return (
    <div className={styles.DetailsAction}>
      <button type="submit" className={styles.saveButton}>
        Guardar cambios
      </button>
    </div>
  );
}
