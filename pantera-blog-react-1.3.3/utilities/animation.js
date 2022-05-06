import React from "react";

const transition = {
    duration: 0.5,
    ease: [0.4, 0, 0.2, 1],
};

export const fadeIn = {
    initial: { opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { ...transition } },
    exit: { opacity: 0, transition },
};

export const slideLeft = {
    initial: { x: -500, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { ...transition } },
    exit: { x: 500, opacity: 0, transition },
};

export const slideRight = {
    initial: { x: -50, opacity: 0, transition },
    enter: { x: 0, opacity: 1, transition: { ...transition } },
    exit: { x: 50, opacity: 0, transition },
};
export const slideUp = {
    initial: { y: -50, opacity: 0, transition: { delay: 0.5, ...transition } },
    enter: { y: 0, opacity: 1, transition: { delay: 0.5, ...transition } },
    exit: { y: 50, opacity: 0, transition: { delay: 0.5, ...transition } },
};
