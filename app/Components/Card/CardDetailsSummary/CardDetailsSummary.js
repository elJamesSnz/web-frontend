import React from "react";
import styles from "./CardDetailsSummary.module.css";

export default function CardDetailsSummary(props) {
  const { name, surname, skills, age } = props;
  return (
    <>
      <div className={styles.detailsAccount}>
        <p>
          <span>Nombre: </span>
          {name}
        </p>
        <p>
          <span>Apellido: </span>
          {surname}
        </p>
        [...]
      </div>
      <div className={styles.detailsSkills}>
        <p>
          <span>Skills: </span>
          {skills ? skills : ""} ...,etc.
        </p>
      </div>
    </>
  );
}
