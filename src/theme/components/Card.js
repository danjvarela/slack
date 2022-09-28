const Card = {
  baseStyle: {
    w: "auto",
    p: 5,
    borderRadius: "lg",
  },
  variants: {
    outlined: {
      borderWidth: 1,
    },
  },
  sizes: {
    sm: {maxW: "sm"},
    md: {maxW: "md"},
    lg: {maxW: "lg"},
  },
  defaultProps: {
    size: "sm",
    variant: "outlined",
  },
};

export default Card;
