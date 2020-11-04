import React, { useState, useEffect } from "react";

import useData from "../../hooks/useData";
import styles from "./Modal.module.css";
import Header from "./Header";
import Body from "./Body";

const Modal = ({ closeHandler, isOpen }) => {
    const { data, handleFilter, handleGenerateData } = useData();
    const [category, setCategory] = useState("");
    const [provider, setProvider] = useState("");
    const [filters, setFilters] = useState({});
    const [search, setSearch] = useState("");

    useEffect(() => {
        category && setFilters((prevState) => ({ ...prevState, category }));
    }, [category, setFilters]);

    useEffect(() => {
        provider && setFilters((prevState) => ({ ...prevState, provider }));
    }, [provider, setFilters]);

    useEffect(() => {
        search && setFilters((prevState) => ({ ...prevState, title: search }));
    }, [search, setFilters]);

    useEffect(() => {
        handleFilter(filters);
    }, [filters, handleFilter]);

    return (
        <div className={styles.container}>
            <div
                className={styles.modalWrapper}
                style={{
                    transform: isOpen
                        ? "translateY(0vh)"
                        : "translateY(-100vh)",
                    opacity: isOpen ? "1" : "0",
                }}
            >
                <Header
                    hanleClose={closeHandler}
                    setProvider={setProvider}
                    setCategory={setCategory}
                    setSearch={setSearch}
                    provider={provider}
                    category={category}
                    search={search}
                />
                <Body data={data} handleData={handleGenerateData} />
            </div>
        </div>
    );
};

export default Modal;
