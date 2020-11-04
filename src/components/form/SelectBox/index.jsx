import React, { useState, useEffect } from "react";

import useDebounce from "../../../hooks/useDebounce";
import styles from "./SelectBox.module.css";

const SelectBox = ({ items, placeholder, handleSelectedValue }) => {
    const debounceValue = useDebounce(value, 300);
    const [value, setValue] = useState("");

    useEffect(() => {
        debounceValue && handleSelectedValue(debounceValue);
    }, [debounceValue, handleSelectedValue]);

    return (
        <>
            <select
                onChange={(e) => setValue(e.target.value)}
                className={styles.selectInput}
                value={value}
            >
                <option disabled value="">
                    {placeholder}
                </option>

                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </>
    );
};

export default SelectBox;
