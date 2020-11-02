import React from "react";
import { VscSearch } from "react-icons/vsc";

import styles from "./InputBox.module.css";

const InputBox = ({ placeholder, handleSelectedValue }) => (
    <div className={styles.inputBox}>
        <input
            type="text"
            placeholder={placeholder}
            className={styles.searchInput}
            onChange={(e) => handleSelectedValue(e.target.value)}
        />
        <VscSearch className={styles.searchIcon} />
    </div>
);

export default InputBox;
