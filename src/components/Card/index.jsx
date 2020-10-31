import React from "react";

import styles from "./Card.module.css";

const Card = () => (
    <div className={styles.main}>
        <div className={styles.header}>
            <div className={styles.status}></div>
            <p className={styles.title}>betcontrast</p>
        </div>
        <div className={styles.body}></div>
        <div className={styles.footer}>
            <p className={styles.footer_title}>Fashion Show</p>
            <p className={styles.footer_subtitle}>video slots</p>
        </div>
    </div>
);

export default Card;
