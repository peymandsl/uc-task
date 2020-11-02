import React, { useState, useEffect } from "react";

import InputBox from "../InputBox";
import SelectBox from "../SelectBox";
import styles from "./SelectInput.module.css";
import Statuses from "../../../constants/STATUSES";
import Providers from "../../../constants/PROVIDERS";
import Categories from "../../../constants/CATEGORIES";

import useData from "../../../hooks/useData";

const SelectInput = ({ category, setCategory, provider, setProvider }) => {
    // const [category, setCategory] = useState("");
    // const [provider, setProvider] = useState("");
    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");

    // const { handleFilter } = useData();

    // useEffect(() => {
    //     if (category) {
    //         handleFilter("category", category);
    //     }
    // }, [category, handleFilter]);

    // useEffect(() => {
    //     if (provider) {
    //         handleFilter("provider", provider);
    //     }
    // }, [provider, handleFilter]);

    // useEffect(() => {
    //     if (search) {
    //         handleFilter("title", search);
    //     }
    // }, [search, handleFilter]);

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
