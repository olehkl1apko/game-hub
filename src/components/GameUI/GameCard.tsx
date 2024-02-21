import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";

import { IGame } from "@/constants";
import { getCroppedImageUrl } from "@/services";
// import Emoji from "./Emoji";
import { PlatformIconList, CriticScore } from ".";

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
        <Heading fontSize="2xl">
          {name}
          {/* <Emoji rating={rating_top} /> */}
        </Heading>
      </CardBody>
    </Card>
  );
};
