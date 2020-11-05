import React from "react";

import Cards from "../../Cards";

const Body = ({ data, isLoading, handleData }) => {
    return <Cards data={data} isLoading={isLoading} handleData={handleData} />;
};

export default Body;
