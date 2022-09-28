import {HStack, useStyleConfig} from "@chakra-ui/react";

const Header = ({children, ...props}) => {
  const {variant, size, ...rest} = props;

  const styles = useStyleConfig("Header", {variant, size});

  return (
    <HStack __css={styles} {...rest}>
      {children}
    </HStack>
  );
};

export default Header;
