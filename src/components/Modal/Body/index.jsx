import React from "react";
import PropTypes, { array } from "prop-types";

import Cards from "../../Cards";

const Body = ({ data, isLoading, handleData }) => (
    <Cards data={data} isLoading={isLoading} handleData={handleData} />
);

Body.defaultProps = {
    data: array,
};

Body.propTypes = {
    data: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    handleData: PropTypes.func.isRequired,
};
export default Body;
