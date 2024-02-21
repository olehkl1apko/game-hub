import { Card, CardBody, Flex, Heading, HStack, Image } from "@chakra-ui/react";

import { IGame } from "@/constants";
import { getCroppedImageUrl } from "@/services";
import { PlatformIconList, CriticScore, Emoji } from ".";

interface Props {
  game: IGame;
}

export const GameCard = ({ game }: Props) => {
  const { background_image, parent_platforms, metacritic, name, rating_top } =
    game;

  return (
    <Card height="100%">
      <Image src={getCroppedImageUrl(background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={metacritic} />
        </HStack>
        <Heading fontSize="2xl">{name}</Heading>
      </CardBody>
      <Flex padding="0 10px 10px 0" justifyContent="flex-end">
        <Emoji rating={rating_top} />
      </Flex>
    </Card>
  );
};
