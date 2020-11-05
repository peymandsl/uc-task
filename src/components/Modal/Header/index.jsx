import React from "react";

import { BsFillQuestionCircleFill } from "react-icons/bs";
import SelectInput from "../../form/SelectInput";
import styles from "./Header.module.css";
import { CgClose } from "react-icons/cg";
import Tabs from "../../Tabs";

const Header = ({
    search,
    status,
    category,
    provider,
    setSearch,
    setStatus,
    hanleClose,
    setProvider,
    setCategory,
}) => {
    return (
        <div className={styles.container}>
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
                    search={search}
                    status={status}
                    provider={provider}
                    category={category}
                    setStatus={setStatus}
                    setSearch={setSearch}
                    setProvider={setProvider}
                    setCategory={setCategory}
                />
            </div>
        </div>
    );
};

export default Header;
