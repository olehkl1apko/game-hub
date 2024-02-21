import { HStack, Image } from "@chakra-ui/react";

import logo from "@/assets/logo.webp";
import { SearchInput, ColorModeSwitch } from "@/components/Utilities";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px" justifyContent="space-between">
      <HStack gap="16px">
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
      </HStack>
      <ColorModeSwitch />
    </HStack>
  );
};
