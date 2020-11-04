import React from "react";

import styles from "./Tabs.module.css";

const Tabs = () => (
    <div className={styles.container}>
        <ul>
            <li>Games</li>
            <li>Categories</li>
            <li>Types</li>
            <li>Providers</li>
        </ul>
    </div>
);

export default Tabs;
