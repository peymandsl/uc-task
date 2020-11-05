import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import PropTypes, { array } from "prop-types";

import Spinner from "../../components/Spinner";
import styles from "./Cards.module.css";
import NotFound from "../NotFound";
import Card from "../Card";

const Cards = ({ data, handleData, isLoading }) => {
    return (
        <div className={styles.main}>
            <InfiniteScroll
                loadMore={() => handleData(10)}
                hasMore={!isLoading}
                useWindow={false}
                pageStart={0}
            >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {data.length === 0 || !data ? (
                        <NotFound />
                    ) : (
                        data.map((item) => <Card key={item.id} item={item} />)
                    )}
                </div>
                {isLoading && data.length !== 0 && (
                    <div className={styles.spinner}>
                        <Spinner />
                    </div>
                )}
            </InfiniteScroll>
        </div>
    );
};

Card.defaultProps = {
    data: array,
};

Cards.propTypes = {
    data: PropTypes.array,
    handleData: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
export default Cards;
