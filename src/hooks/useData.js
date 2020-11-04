import { useState, useEffect, useCallback } from "react";
import faker from "faker";


import CATEGORIES from "../constants/CATEGORIES";
import PROVIDERS from "../constants/PROVIDERS";
import useMounted from "./useMounted";

const useData = () => {
    const isMounted = useMounted();
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const handleGenerateData = useCallback(
        (size) => {
            if (isMounted) {
                setData((prevState) => {
                    const prevData = [...prevState];
                    for (let i = 0; i < size; i++) {
                        const randomIndexCategory = Math.floor(
                            Math.random() * 10
                        );
                        const randomIndexProvider = Math.floor(
                            Math.random() * 10
                        );

                        prevData.push({
                            id: faker.random.uuid(),
                            thumbnail: faker.random.image(),
                            title: faker.name.title(),
                            category: CATEGORIES[randomIndexCategory],
                            provider: PROVIDERS[randomIndexProvider],
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

    const handleFilter = useCallback(
        (items) => {
            // console.log(type, value);
            setFilteredData(() => {
                let originalData = [...data];
                if (!items || Object.values(items).length === 0) {
                    return originalData;
                }

                for (const property in items) {
                    originalData = originalData.filter((item) =>
                        item[property]
                            .toLowerCase()
                            .includes(items[property].toLowerCase())
                    );
                }

                return originalData;

                // return originalData.filter(
                //     (item) =>
                //         item.category
                //             .toLowerCase()
                //             .includes(category.toLowerCase())
                //     //     &&
                //     // item.provider.toLowerCase().includes(provider.toLowerCase())
                // );
                // .filter((item) =>
                //     item.provider
                //         .toLowerCase()
                //         .includes(provider.toLowerCase())
                // );
                // return originalData.filter((item) =>
                //     item[type].toLowerCase().includes(value.toLowerCase())
                // );
            });
        },
        [data]
    );

    useEffect(() => {
        handleGenerateData(10);
    }, [handleGenerateData]);

    useEffect(() => {
        handleFilter();
    }, [handleFilter]);

    return {
        handleFilter,
        data: filteredData,
        handleGenerateData,
    };
};

export default useData;
