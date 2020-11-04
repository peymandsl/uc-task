import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroller";

import styles from "./Cards.module.css";
import NotFound from "../NotFound";
import Card from "../Card";

const Cards = ({ data: test, handleData }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(test);
    }, [test]);

    return !data || data.length === 0 ? (
        <NotFound />
    ) : (
        <div className={styles.main}>
            <InfiniteScroll
                loadMore={() => handleData(10)}
                useWindow={false}
                hasMore={true}
                pageStart={0}
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
