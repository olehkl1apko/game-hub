import { Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import logo from "@/assets/logo.webp";
import { ColorModeSwitch, SearchInput } from "@/components/Filters";

export const NavBar = () => {
  return (
    <Flex
      padding="10px"
      gap="16px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Link to="/">
        <Image src={logo} width="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};
