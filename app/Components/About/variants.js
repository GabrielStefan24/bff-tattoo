export const slideRight = {
  initial: {
    x: "0",
  },
  enter: {
    x: "100%",
    transition: { duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] },
  },
};

export const rotate = {
  initial: {
    rotate: 20,
    x: "30%",
    y: "-10%",
  },
  enter: {
    rotate: 0,
    x: "30%",
    y: "-10%",
    transition: { duration: 1.5, ease: [0.61, 1, 0.88, 1] },
  },
};
