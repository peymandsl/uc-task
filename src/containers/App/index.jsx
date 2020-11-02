import React from "react";
import { Helmet } from "react-helmet";
import Modal from "../../components/Modal/modal";
import ModalContainer from "../../components/Modal/Container";

const App = () => (
    <>
        <Helmet
            titleTemplate={`%s - ${process.env.REACT_APP_NAME}`}
            defaultTitle={process.env.REACT_APP_NAME}
        />
        <ModalContainer />

        {/* <Modal /> */}
    </>
);

export default App;
