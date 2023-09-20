export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
  },
};

export const slideUp = {
  initial: {
    y: "200%",
  },
  open: {
    y: "-20%",
    transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
  closed: {
    y: "200%",
  },
};

export const linkVariants = {
  initial: {
    x: "-120%",
  },
  open: (i) => ({
    x: "0",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 + 0.1 * i },
  }),
  exit: {
    x: "-120%",
    transition: { duration: 0.2 },
  },
};