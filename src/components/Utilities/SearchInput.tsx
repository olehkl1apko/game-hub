import { FormEvent, useEffect, useRef } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useGameQueryStore } from "@/store";

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  useEffect(() => {
    if (ref && ref.current) {
      ref.current.focus();
    }
  }, [ref]);

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    if (ref.current) setSearchText(ref.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};
