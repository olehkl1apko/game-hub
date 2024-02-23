import axios from "axios";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import ms from "ms";

interface IPost {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface IPostQuery {
  pageSize: number;
}

const usePosts = (query: IPostQuery) => {
  return useInfiniteQuery<IPost[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: ms("1m"),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

// USING USER FILTER
// const usePosts = (userId: number | undefined) => {
//   return useQuery<IPost[], Error>({
//     queryKey: userId ? ["users", userId, "posts"] : ["posts"], // fetch like this: https://.../users/1/posts and it depends on API
//     queryFn: () =>
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts", {
//           params: {
//             userId,
//           },
//         })
//         .then((res) => res.data),
//     staleTime: 1 * 60 * 1000,
//   });
// };

// USING PAGINATION WITH PREV AND NEXT BUTTONS
// const usePosts = (query: IPostQuery) => {
//   return useQuery<IPost[], Error>({
//     queryKey: ["posts", query],
//     queryFn: () =>
//       axios
//         .get("https://jsonplaceholder.typicode.com/posts", {
//           params: {
//             _start: (query.page - 1) * query.pageSize,
//             _limit: query.pageSize,
//           },
//         })
//         .then((res) => res.data),
//     staleTime: 1 * 60 * 1000,
//     keepPreviousData: true, // take data from a cache
//   });
// };

export default usePosts;
