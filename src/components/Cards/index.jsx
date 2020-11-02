import React, { useState, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroller";

import styles from "./Cards.module.css";
import Card from "../Card";

const Cards = ({ data, handleData }) => {
    return (
        <div className={styles.main}>
            <InfiniteScroll
                pageStart={0}
                useWindow={false}
                loadMore={() => handleData(10)}
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
