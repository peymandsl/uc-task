import React from "react";
import { CgArrowLongDown } from "react-icons/cg";

import styles from "./SelectBox.module.css";

const SelectBox = () => (
    <select name="category" id="category" className={styles.selectInput}>
        <option value="category">Category</option>
        <option value="category">Category</option>
        <option value="category">Category</option>
    </select>
);

export default SelectBox;
