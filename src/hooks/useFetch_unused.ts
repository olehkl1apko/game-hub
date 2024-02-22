// import { AxiosRequestConfig, CanceledError } from "axios";
// import { useEffect, useState } from "react";
// import { apiClient } from "@/config";
// import { IFetchResponse } from "@/constants";

// export const useFetch = <T>(
//   endpoint: string,
//   requestConfig?: AxiosRequestConfig,
//   deps?: any[]
// ) => {
//   const [data, setData] = useState<T[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(
//     () => {
//       const controller = new AbortController();

//       setLoading(true);
//       apiClient
//         .get<IFetchResponse<T>>(endpoint, {
//           signal: controller.signal,
//           ...requestConfig,
//         })
//         .then((res) => {
//           setData(res.data.results);
//           setLoading(false);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;
//           setError(err.message);
//           setLoading(false);
//         });

//       return () => controller.abort();
//     },
//     deps ? [...deps] : []
//   );

//   return { data, error, isLoading };
// };

export {};
