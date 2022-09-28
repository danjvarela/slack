import {VStack, useStyleConfig} from "@chakra-ui/react";

const Card = ({children, ...props}) => {
  const {variant, size, ...rest} = props;

  const styles = useStyleConfig("Card", {variant, size});

  return (
    <VStack __css={styles} {...rest}>
      {children}
    </VStack>
  );
};

export default Card;
