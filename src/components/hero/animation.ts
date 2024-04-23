export const cartVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const infoVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

export const notificationVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};
export const notificationUlVariants = {
  visible: {
    transition: {
      delay: 1,
      delayChildren: 0.7,
      staggerChildren: 1,
    },
  },
};

export const notificationIlVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
