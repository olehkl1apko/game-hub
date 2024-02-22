import { useMutation, useQueryClient } from "@tanstack/react-query";

import { CACHE_KEY_TODOS } from "@/examples/react-query/constants";
import todoService, {
  ITodo,
} from "@/examples/react-query/services/todoService";

interface AddTodoContext {
  previousTodos: ITodo[];
}

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<ITodo, Error, ITodo, AddTodoContext>({
    mutationFn: todoService.post,

    onMutate: (newTodo: ITodo) => {
      const previousTodos =
        queryClient.getQueryData<ITodo[]>(CACHE_KEY_TODOS) || []; // get the data before mutation

      queryClient.setQueryData<ITodo[]>(CACHE_KEY_TODOS, (todos = []) => [
        newTodo,
        ...todos,
      ]);

      onAdd();

      return { previousTodos }; // return the data before mutation for onError function
    },

    onSuccess: (savedTodo, newTodo) => {
      // APPROACH 1: invalidate the cache (it doesn`t work in fake APIs which don`t save new data)
      // queryClient.invalidateQueries({ queryKey: ["todos"] });

      // APPROACH 2: updating the data in the cache
      queryClient.setQueryData<ITodo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;

      queryClient.setQueryData<ITodo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
