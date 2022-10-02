import {HStack, useColorMode} from "@chakra-ui/react";
import {FixedSizeList} from "react-window";

const height = 35;

const MenuList = (props) => {
  const {options, children, maxHeight, getValue} = props;
  const [value] = getValue();
  const initialOffset = options.indexOf(value) * height;

  const {colorMode} = useColorMode();

  return (
    <FixedSizeList
      height={maxHeight}
      itemCount={children.length}
      itemSize={height}
      initialScrollOffset={initialOffset}
      style={{
        backgroundColor: colorMode === "dark" ? "#1A202C" : "white",
        borderRadius: "0.5rem",
      }}
    >
      {({index, style}) => {
        return <HStack __css={style}>{children[index]}</HStack>;
      }}
    </FixedSizeList>
  );
};

export default MenuList;
