import { useState, useEffect, useCallback } from "react";

import faker from "faker";

import PROVIDERS from "../constants/PROVIDERS";
import CATEGORIES from "../constants/CATEGORIES";
import useMounted from "./useMounted";

const useData = () => {
    const isMounted = useMounted();
    const [data, setData] = useState([]);
    const [category, setCategory] = useState("");
    const [provider, setProvider] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleGenerateData = useCallback(
        (size) => {
            if (isMounted) {
                setData((prevState) => {
                    const prevData = [...prevState];
                    for (let i = 0; i < size; i++) {
                        const randomIndex = Math.floor(Math.random() * 10);

                        prevData.push({
                            id: faker.random.uuid(),
                            thumbnail: faker.random.image(),
                            title: faker.name.title(),
                            category: CATEGORIES[randomIndex],
                            provider: PROVIDERS[randomIndex],
                            status: faker.random.boolean(),
                        });
                    }
                    return prevData;
                });
            }
        },
        [isMounted]
    );

    // const generateDataFilter = useCallback((data, type, value) => {
    //     return data.filter((item) =>
    //     item[type].toLowerCase().includes(value.toLowerCase())
    // );
    // }, [])

    const handleFilter = useCallback(() => {
        console.log("here");
        setFilteredData(() => {
            const originalData = [...data];

            // if (!type || !value) {
            //     console.log("orginallllll");
            //     return originalData;
            // }
            return originalData.filter(
                (item) =>
                    item.category
                        .toLowerCase()
                        .includes(category.toLowerCase()) &&
                    item.provider.toLowerCase().includes(provider.toLowerCase())
            );
            // .filter((item) =>
            //     item.provider
            //         .toLowerCase()
            //         .includes(provider.toLowerCase())
            // );
            // return originalData.filter((item) =>
            //     item[type].toLowerCase().includes(value.toLowerCase())
            // );
        });
    }, [data, category, provider]);

    const handleCategory = useCallback(
        (value) => {
            isMounted && setCategory(value);
        },
        [isMounted]
    );

    const handleProvider = useCallback(
        (value) => {
            isMounted && setProvider(value);
        },
        [isMounted]
    );

    useEffect(() => {
        handleFilter();
    }, [handleFilter]);

    return {
        handleFilter,
        setCategory: handleCategory,
        setProvider: handleProvider,
        category,
        provider,
        data: filteredData,
        handleGenerateData,
    };
};

export default useData;
