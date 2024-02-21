import { Flex, HStack, Image } from "@chakra-ui/react";

import logo from "@/assets/logo.webp";
import { SearchInput, ColorModeSwitch } from "@/components/Utilities";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <Flex
      padding="10px"
      gap="16px"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </Flex>
  );
};
