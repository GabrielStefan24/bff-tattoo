export const moveLeft = {
  initial: {
    x: "20%",
    y: "40%",
  },
  enter: {
    x: "5%",
    y: "40%",
    transition: { duration: 1, ease: [0.5, 0.2, 0.8, 1] },
  },
};
export const slideRight = {
  initial: {
    x: "0",
  },
  enter: {
    x: "100%",
    transition: { duration: 1.5, ease: [0.45, 0.05, 0.55, 0.95] },
  },
};
