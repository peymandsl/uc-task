import React, { useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroller";

import useData from "../../hooks/useData";
import styles from "./Cards.module.css";
import Card from "../Card";

const Cards = () => {
    const { data, handleGenerateData } = useData();

    return (
        <div className={styles.main}>
            <InfiniteScroll
                pageStart={0}
                useWindow={false}
                loadMore={() => handleGenerateData(10)}
                hasMore={true}
                loader={
                    <div className="loader" key={0}>
                        Loading ...
                    </div>
                }
            >
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {data.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default Cards;
