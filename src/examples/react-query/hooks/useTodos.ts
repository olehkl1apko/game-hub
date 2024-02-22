import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { ITodo } from "../services/todoService";

const useTodos = () => {
  return useQuery<ITodo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, // 10sec - how long the data is considered fresh
  });
};

export default useTodos;
