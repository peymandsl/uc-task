import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import useMounted from "../../hooks/useMounted";
import useData from "../../hooks/useData";
import styles from "./Modal.module.css";
import Header from "./Header";
import Body from "./Body";

const Modal = ({ closeHandler, isOpen }) => {
    const isMounted = useMounted();
    const [search, setSearch] = useState("");
    const [filters, setFilters] = useState({});
    const [status, setStatus] = useState("all");
    const [category, setCategory] = useState("all");
    const [provider, setProvider] = useState("all");
    const { data, handleFilter, isLoading, handleGenerateData } = useData();

    useEffect(() => {
        setFilters((prevState) => ({ ...prevState, category }));
    }, [category]);

    useEffect(() => {
        setFilters((prevState) => ({ ...prevState, provider }));
    }, [provider]);

    useEffect(() => {
        setFilters((prevState) => ({ ...prevState, title: search }));
    }, [search]);

    useEffect(() => {
        setFilters((prevState) => ({ ...prevState, status }));
    }, [status]);

    useEffect(() => {
        isMounted && handleFilter(filters);
    }, [filters, isMounted, handleFilter]);

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
                    status={status}
                    search={search}
                    provider={provider}
                    category={category}
                    setStatus={setStatus}
                    setSearch={setSearch}
                    setProvider={setProvider}
                    setCategory={setCategory}
                    hanleClose={closeHandler}
                />
                <Body
                    data={data}
                    isLoading={isLoading}
                    handleData={handleGenerateData}
                />
            </div>
        </div>
    );
};

Modal.propTypes = {
    closeHandler: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
export default Modal;
