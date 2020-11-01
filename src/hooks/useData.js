import { useState, useCallback } from "react";

import faker from "faker";

import PROVIDERS from "../constants/PROVIDERS";
import CATEGORIES from "../constants/CATEGORIES";
import useMounted from "./useMounted";

const useData = () => {
    const [data, setData] = useState([]);
    const isMounted = useMounted();

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

    return {
        data,
        handleGenerateData,
    };
};

export default useData;
