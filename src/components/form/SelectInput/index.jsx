import React from "react";

import styles from "./SelectInput.module.css";
import InputBox from "../InputBox";
import SelectBox from "../SelectBox";

const SelectInput = () => (
    <form className={styles.formContainer}>
        <InputBox />
        <SelectBox />
    </form>
);

export default SelectInput;
