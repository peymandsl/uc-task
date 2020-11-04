import React, { useState, useEffect } from "react";
import { VscSearch } from "react-icons/vsc";

import useDebounce from "../../../hooks/useDebounce";
import styles from "./InputBox.module.css";

const InputBox = ({ placeholder, handleSelectedValue }) => {
    const debounceValue = useDebounce(value, 300);
    const [value, setValue] = useState("");

    useEffect(() => {
        debounceValue && handleSelectedValue(debounceValue);
    }, [debounceValue, handleSelectedValue]);

    return (
        <div className={styles.inputBox}>
            <input
                onChange={(e) => setValue(e.target.value)}
                className={styles.searchInput}
                placeholder={placeholder}
                type="text"
            />
            <VscSearch className={styles.searchIcon} />
        </div>
    );
};

export default InputBox;
