import React from "react";
import { Helmet } from "react-helmet";

import Card from "../../components/Card";

const App = () => (
    <>
        <Helmet
            titleTemplate={`%s - ${process.env.REACT_APP_NAME}`}
            defaultTitle={process.env.REACT_APP_NAME}
        />
        <div>
            <Card />
        </div>
    </>
);

export default App;
