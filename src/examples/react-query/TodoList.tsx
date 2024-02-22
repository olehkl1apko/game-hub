import useTodos from "./hooks/useTodos";

export const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <div className="text-danger">Loading...</div>;

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};
