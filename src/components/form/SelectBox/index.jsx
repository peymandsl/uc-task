import React from "react";

import styles from "./SelectBox.module.css";

const SelectBox = ({
    items,
    placeholder,
    selectedValue,
    handleSelectedValue,
}) => {
    return (
        <>
            <select
                value={selectedValue}
                className={styles.selectInput}
                onChange={(e) => handleSelectedValue(e.target.value)}
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
