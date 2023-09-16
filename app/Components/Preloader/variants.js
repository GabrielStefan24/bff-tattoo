export const rotate = {
  initial: {
    rotate: -15,
    opacity: 0.1,
    scale: 2,
  },
  enter: {
    rotate: 0,
    opacity: 1,
    scale: 1,

    transition: { duration: 1.5, ease: [0.37, 0, 0.63, 1], delay: 0.5 },
  },
};

export const slideUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.37, 0, 0.63, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 1, ease: [0.37, 0, 0.63, 1] },
  },
};
