import React, { useState, useRef } from "react";
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
} from "react-spring";

import Modal from "../index";
import { Container, Global, Button } from "./styles";

const ModalContainer = () => {
    const [open, setOpen] = useState(false);

    const springRef = useRef();
    const { size, opacity, ...rest } = useSpring({
        ref: springRef,
        config: config.stiff,
        from: { size: "20%", background: "lightblue" },
        to: {
            size: open ? "100%" : "20%",
            background: open ? "white" : "lightblue",
        },
    });

    const transRef = useRef();
    const transitions = useTransition(open, {
        ref: transRef,
        unique: true,
        trail: 400,
        from: { opacity: 0, transform: "scale(0)" },
        enter: { opacity: 1, transform: "scale(1)" },
        leave: { opacity: 0, transform: "scale(0)" },
    });

    useChain(open ? [springRef, transRef] : [transRef, springRef], [
        0,
        open ? 0.1 : 0.6,
    ]);

    return (
        <>
            <Global />
            <Container style={{ ...rest, width: size, height: size }}>
                {transitions.map(({ item, key, props }) =>
                    item ? (
                        <Modal
                            style={props}
                            hanleClose={() => setOpen(false)}
                            key={key}
                        />
                    ) : (
                        <Button onClick={() => setOpen(true)} key={key}>
                            open
                        </Button>
                    )
                )}
            </Container>
        </>
    );
};

export default ModalContainer;
