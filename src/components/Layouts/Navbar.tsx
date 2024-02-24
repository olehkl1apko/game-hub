import { Flex, Image } from "@chakra-ui/react";

import logo from "@/assets/logo.webp";
import { ColorModeSwitch, SearchInput } from "@/components/Utilities";

export const NavBar = () => {
  return (
    <Flex
      padding="10px"
      gap="16px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </Flex>
  );
};
