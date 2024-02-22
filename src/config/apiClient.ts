import axios, { AxiosRequestConfig } from "axios";

import { IFetchResponse } from "@/constants";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
  },
});

export class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    return await axiosInstance
      .get<IFetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = async (id: number | string) => {
    return await axiosInstance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
