import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useDebounce from "../../../hooks/useDebounce";
import styles from "./SelectBox.module.css";

const SelectBox = ({ items, placeholder, handleSelectedValue }) => {
    const [value, setValue] = useState("all");
    const debounceValue = useDebounce(value, 500);

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
                <option value="all">{placeholder}</option>

                {items.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </>
    );
};

SelectBox.propTypes = {
    items: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleSelectedValue: PropTypes.func.isRequired,
};

export default SelectBox;
