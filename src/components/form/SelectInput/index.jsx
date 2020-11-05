import React from "react";
import PropTypes from "prop-types";

import Categories from "../../../constants/CATEGORIES";
import Providers from "../../../constants/PROVIDERS";
import Statuses from "../../../constants/STATUSES";
import styles from "./SelectInput.module.css";
import SelectBox from "../SelectBox";
import InputBox from "../InputBox";

const SelectInput = ({
    search,
    status,
    category,
    provider,
    setSearch,
    setStatus,
    setProvider,
    setCategory,
}) => (
    <div className={styles.container}>
        <InputBox
            placeholder="Search"
            selectedValue={search}
            handleSelectedValue={setSearch}
        />
        <SelectBox
            items={Categories}
            selectedValue={category}
            placeholder="All Category"
            handleSelectedValue={setCategory}
        />
        <SelectBox
            items={Providers}
            selectedValue={provider}
            placeholder="All Providers"
            handleSelectedValue={setProvider}
        />
        <SelectBox
            items={Statuses}
            selectedValue={status}
            placeholder="All Statuses"
            handleSelectedValue={setStatus}
        />
    </div>
);

SelectInput.propTypes = {
    search: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    setStatus: PropTypes.func.isRequired,
    setProvider: PropTypes.func.isRequired,
    setCategory: PropTypes.func.isRequired,
};

export default SelectInput;
