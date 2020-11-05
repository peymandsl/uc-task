import React from "react";
import { Helmet } from "react-helmet";

import Home from "../../components/Home";

const App = () => (
    <>
        <Helmet
            titleTemplate={`%s - ${process.env.REACT_APP_NAME}`}
            defaultTitle={process.env.REACT_APP_NAME}
        />
        <Home />
    </>
);

export default App;
