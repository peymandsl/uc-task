import { useState, useCallback } from "react";

import faker from "faker";

import CATEGORIES from "../constants/CATEGORIES";
import PROVIDERS from "../constants/PROVIDERS";
import useMounted from "./useMounted";

const useData = () => {
    const isMounted = useMounted();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    const handleGenerateData = useCallback(
        (size) => {
            if (isMounted) {
                setIsLoading(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 3000);
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

    const handleFilter = useCallback(
        (items) => {
            if (isMounted) {
                setFilteredData(() => {
                    let originalData = [...data];
                    if (!items || Object.values(items).length === 0) {
                        return originalData;
                    }

                    for (const property in items) {
                        if (property === "status") {
                            if (items[property] !== "all") {
                                const isActive =
                                    items[property] === "Active" ? true : false;
                                originalData = originalData.filter(
                                    (item) => item[property] === isActive
                                );
                            }
                        } else {
                            const val =
                                items[property] === "all"
                                    ? ""
                                    : items[property];
                            originalData = originalData.filter((item) =>
                                item[property]
                                    .toLowerCase()
                                    .includes(val.toLowerCase())
                            );
                        }
                    }

                    return originalData;
                });
            }
        },
        [data, isMounted]
    );

    return {
        isLoading,
        handleFilter,
        data: filteredData,
        handleGenerateData,
    };
};

export default useData;
