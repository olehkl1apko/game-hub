import { Dispatch, createContext } from "react";
import { ITask, TaskAction } from "./TasksProvider";

interface ITaskContextType {
  tasks: ITask[];
  dispatch: Dispatch<TaskAction>;
}

export const TaskContext = createContext<ITaskContextType>(
  {} as ITaskContextType
);
