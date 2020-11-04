import React from "react";

import { BsFillQuestionCircleFill } from "react-icons/bs";
import SelectInput from "../../form/SelectInput";
import styles from "./Header.module.css";
import { CgClose } from "react-icons/cg";
import Tabs from "../../Tabs";

const Header = ({
    setProvider,
    setCategory,
    hanleClose,
    setSearch,
    category,
    provider,
    search,
}) => {
    return (
        <>
            <div className={styles.header}>
                <p className={styles.title}>CASINO APP</p>
                <div className={styles.buttons}>
                    <BsFillQuestionCircleFill className={styles.button} />
                    <CgClose onClick={hanleClose} className={styles.button} />
                </div>
            </div>
            <div className={styles.filters}>
                <Tabs />
                <SelectInput
                    setCategory={setCategory}
                    setProvider={setProvider}
                    setSearch={setSearch}
                    category={category}
                    provider={provider}
                    search={search}
                />
            </div>
        </>
    );
};

export default Header;
