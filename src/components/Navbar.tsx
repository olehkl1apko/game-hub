import { Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.webp";
import { ColorModeSwitch, SearchInput } from "@/components/Filters";

export const NavBar = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue(
    "0px 4px 6px rgba(0, 0, 0, 0.05)",
    "0px 4px 6px rgba(0, 0, 0, 0.3)"
  );

  return (
    <Flex
      backgroundColor={bgColor}
      boxShadow={shadow}
      borderRadius={10}
      padding={5}
      gap="16px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      zIndex={10}
    >
      <Link to="/">
        <Image src={logo} width="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};
