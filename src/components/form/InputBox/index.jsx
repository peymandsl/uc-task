import React from "react";
import { VscSearch } from "react-icons/vsc";

import styles from "./InputBox.module.css";

const InputBox = () => (
    <div className={styles.inputBox}>
        <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
        />
        <VscSearch className={styles.searchIcon} />
    </div>
);

export default InputBox;
