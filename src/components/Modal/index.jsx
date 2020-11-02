import React from "react";

import useData from "../../hooks/useData";
import Header from "./Header";
import Body from "./Body";

const Modal = ({ hanleClose }) => {
    const {
        data,
        // handleFilter,
        handleGenerateData,
        category,
        setCategory,
        setProvider,
        provider,
    } = useData();

    return (
        <>
            <Header
                hanleClose={hanleClose}
                // handleFilter={handleFilter}
                category={category}
                provider={provider}
                setCategory={setCategory}
                setProvider={setProvider}
            />
            <Body data={data} handleData={handleGenerateData} />
        </>
    );
};

export default Modal;
