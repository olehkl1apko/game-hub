import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface ITask {
  id: number;
  title: string;
}

interface ITaskStore {
  tasks: ITask[];
  add: (task: ITask) => void;
  deleteTask: (taskId: number) => void;
}

export const useTaskStore = create<ITaskStore>((set) => ({
  tasks: [],
  add: (task) => set((store) => ({ ...store, tasks: [...store.tasks, task] })),
  deleteTask: (taskId) =>
    set((store) => ({
      ...store,
      tasks: store.tasks.filter((t) => t.id !== taskId),
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Tasks Store", useTaskStore);
