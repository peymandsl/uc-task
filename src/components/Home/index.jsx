import React, { useState } from "react";

import styles from "./Home.module.css";
import Modal from "../Modal";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            {isOpen ? (
                <div
                    onClick={() => setIsOpen(false)}
                    className={styles.backDrop}
                ></div>
            ) : null}
            <button
                style={{ display: isOpen ? "none" : "block" }}
                className={styles.btnOpenModal}
                onClick={() => setIsOpen(true)}
            >
                Open
            </button>
            <Modal isOpen={isOpen} closeHandler={() => setIsOpen(false)} />
        </div>
    );
};

export default Home;
