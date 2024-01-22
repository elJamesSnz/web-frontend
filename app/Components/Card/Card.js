import React from "react";
import styles from "./Card.module.css";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";
import CardActions from "./CardActions";
import CardDetailsSummary from "./CardDetailsSummary";

export default function Card({ item }) {
  return (
    <div className={styles.cardItem}>
      <CardMain item={item} />
    </div>
  );
}

function CardMain(props) {
  const { item } = props;

  return (
    <>
      <div className={styles.cardInfo}>
        <CardImage image={item.image} />
        <CardFooter username={item.username} />
      </div>
      <div className={styles.cardDetials}>
        <CardDetailsSummary
          name={item.name}
          surname={item.surname}
          age={item.age}
          skills={item.skills ? item.skills[0] : null}
        />
      </div>
      <div className={styles.cardActions}>
        <CardActions id={item.id} username={item.username} />
      </div>
    </>
  );
}
