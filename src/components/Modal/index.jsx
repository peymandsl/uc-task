import React from "react";

import Header from "./Header";
import Body from "./Body";

const Modal = ({ hanleClose }) => (
    <>
        <Header hanleClose={hanleClose} />
        <Body />
    </>
);

export default Modal;
