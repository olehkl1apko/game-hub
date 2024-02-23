import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { ITodo } from "../services/todoService";
import ms from "ms";

const useTodos = () => {
  return useQuery<ITodo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: ms("10s"),
  });
};

export default useTodos;
