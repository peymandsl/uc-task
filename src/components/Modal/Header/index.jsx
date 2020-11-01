import React from "react";
import { CgClose } from "react-icons/cg";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import SelectInput from "../../form/SelectInput";
import Tabs from "../../Tabs";
import styles from "./Header.module.css";

const Header = ({ hanleClose }) => {
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
                <SelectInput />
            </div>
        </>
    );
};

export default Header;
