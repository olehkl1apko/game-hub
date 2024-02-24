import { ReactNode, useReducer } from "react";
import { TaskContext } from "./taskContext";

export interface ITask {
  id: number;
  title: string;
}

interface IAddTask {
  type: "ADD";
  task: ITask;
}

interface IDeleteTask {
  type: "DELETE";
  taskId: number;
}

export type TaskAction = IAddTask | IDeleteTask;

const taskReducer = (tasks: ITask[], action: TaskAction): ITask[] => {
  if (action.type === "ADD") return [action.task, ...tasks];
  if (action.type === "DELETE")
    return tasks.filter((t) => t.id !== action.taskId);
  return tasks;
};

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TasksProvider;
