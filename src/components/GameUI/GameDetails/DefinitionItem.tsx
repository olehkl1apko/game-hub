import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

export const DefinitionItem = ({ term, children }: Props) => {
  const color = useColorModeValue("gray.700", "gray.400");

  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" marginBottom="8px" color={color}>
        {term}
      </Heading>
      <dd className="ps-2">{children}</dd>
    </Box>
  );
};
