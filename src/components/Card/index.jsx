import React, { memo } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({ item }) => (
    <div className={styles.main}>
        <div className={styles.header}>
            <div
                className={styles.status}
                style={{
                    backgroundColor: item.status ? "#00C853" : "#DD2C00",
                }}
            />
            <p className={styles.title}>{item.provider}</p>
        </div>

        <div className={styles.body}>
            <img alt={item.provider} src={item.thumbnail} />
        </div>

        <div className={styles.footer}>
            <p className={styles.footer_title}>{item.title}</p>
            <p className={styles.footer_subtitle}>{item.category}</p>
        </div>
    </div>
);

Card.prototype = {
    item: PropTypes.object.isRequired,
};
export default memo(Card);
