export const opacity = {
  initial: {
    opacity: 0,
    y: "20%",
  },
  enter: {
    opacity: 1,
    y: "0",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export const opacityImg = {
  initial: {
    opacity: 0,
    x: "50%",
  },
  enter: (i) => ({
    opacity: 1,
    x: "0",
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5 + 0.2 * i,
    },
  }),
};
