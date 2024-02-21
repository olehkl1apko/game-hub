import { Image } from "@chakra-ui/react";
import { emojiMap } from "@/constants";

interface Props {
  rating: number;
}

export const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  return <Image {...emojiMap[rating]} marginTop={1} textAlign="right" />;
};
