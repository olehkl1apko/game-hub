import APIClient from "./apiClient";

export interface ITodo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

export default new APIClient<ITodo>("/todos");
