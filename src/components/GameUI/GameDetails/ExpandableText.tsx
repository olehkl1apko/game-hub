import { useState } from "react";
import { Button, Flex, Text } from "@chakra-ui/react";

import { limitSymbolsDescription } from "@/constants";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length <= limitSymbolsDescription)
    return <Text>{children}</Text>;

  const summary = expanded
    ? children
    : children.substring(0, limitSymbolsDescription) + "...";

  return (
    <Flex direction="column" gap={2} marginBottom={5} alignItems="flex-start">
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="purple"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Flex>
  );
};
