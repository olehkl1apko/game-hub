import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import { usePlatforms } from "@/hooks";
import { ITypeFilter, findCurrentFilterById } from "@/services";
import { useGameQueryStore } from "@/store";

export const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const currentPlatform = findCurrentFilterById(
    ITypeFilter.PLATFORM,
    selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setSelectPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
