// import { useAuth } from "../auth/useAuth";
// import { useTasks } from "./useTasks";
import { useAuthStore } from "../auth/authStore";
import { useTaskStore } from "./taskStore";

const TaskList = () => {
  // const { tasks, dispatch } = useTasks();
  // const { user } = useAuth();
  // const { user } = useAuthStore(); // re-render always when any prop in authStore is changed
  const { tasks, add, deleteTask } = useTaskStore();
  const user = useAuthStore((s) => s.user); // re-render only when user prop is changed

  return (
    <>
      <p>User: {user}</p>
      <button
        onClick={() => add({ id: Date.now(), title: "Task " + Date.now() })}
        className="btn btn-primary my-3"
      >
        Add Task
      </button>
      {/* <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task " + Date.now() },
          })
        }
        className="btn btn-primary my-3"
      >
        Add Task
      </button> */}
      <ul className="list-group">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
            {/* <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
