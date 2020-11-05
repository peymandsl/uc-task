import React, { useState, useEffect } from "react";
import { VscSearch } from "react-icons/vsc";

import useDebounce from "../../../hooks/useDebounce";
import styles from "./InputBox.module.css";

const InputBox = ({ placeholder, handleSelectedValue }) => {
    const [value, setValue] = useState("");
    const [defaultValue, setDefaultValue] = useState("all");

    const debounceValue = useDebounce(defaultValue, 500);

    useEffect(() => {
        debounceValue && handleSelectedValue(debounceValue);
    }, [debounceValue, handleSelectedValue]);

    useEffect(() => {
        setDefaultValue(() => value || "all");
    }, [value]);

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
