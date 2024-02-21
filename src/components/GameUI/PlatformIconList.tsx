import { HStack, Icon } from "@chakra-ui/react";

import { IPlatform, iconMap } from "@/constants";

export const PlatformIconList = ({
  platforms = [],
}: {
  platforms: IPlatform[];
}) => {
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};
