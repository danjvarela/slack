const Header = {
  baseStyle: {
    w: "full",
    px: 5,
  },
  variants: {
    unstyled: {
      borderWidth: 0,
    },
    outlined: {
      borderBottomWidth: 1,
    },
  },
  sizes: {
    sm: {h: 10},
    md: {h: 12},
    lg: {h: 14},
  },
  defaultProps: {
    size: "sm",
    variant: "unstyled",
  },
};

export default Header;
