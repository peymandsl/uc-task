import React from "react";
import { Helmet } from "react-helmet";

const App = () => (
    <>
        <Helmet
            titleTemplate={`%s - ${process.env.REACT_APP_NAME}`}
            defaultTitle={process.env.REACT_APP_NAME}
        />
        <div>Home</div>
    </>
);

export default App;
