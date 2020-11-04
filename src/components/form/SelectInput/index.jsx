import React, { useState } from "react";

import Categories from "../../../constants/CATEGORIES";
import Providers from "../../../constants/PROVIDERS";
import Statuses from "../../../constants/STATUSES";
import styles from "./SelectInput.module.css";
import SelectBox from "../SelectBox";
import InputBox from "../InputBox";

const SelectInput = ({
    setCategory,
    setProvider,
    setSearch,
    provider,
    category,
    search,
}) => {
    const [status, setStatus] = useState("");

    return (
        <div className={styles.container}>
            <InputBox
                selectedValue={search}
                placeholder="Search"
                handleSelectedValue={setSearch}
            />
            <SelectBox
                items={Categories}
                placeholder="All Category"
                selectedValue={category}
                handleSelectedValue={setCategory}
            />
            <SelectBox
                items={Providers}
                placeholder="All Providers"
                selectedValue={provider}
                handleSelectedValue={setProvider}
            />
            <SelectBox
                items={Statuses}
                placeholder="All Statuses"
                selectedValue={status}
                handleSelectedValue={setStatus}
            />
        </div>
    );
};
export default SelectInput;
