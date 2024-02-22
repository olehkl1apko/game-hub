import { Fragment, useState } from "react";
import usePosts from "./hooks/usePosts";

export const PostList = () => {
  const pageSize = 10;
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = usePosts({ pageSize });

  if (isLoading) return <div className="text-danger">Loading...</div>;

  if (error) return <p className="text-danger">{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <Fragment key={index}>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </Fragment>
        ))}
      </ul>
      {hasNextPage && (
        <button
          className="btn btn-primary my-3 ms-1"
          disabled={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};

/* USING USER FILTER */
// export const PostList = () => {
//   const [userId, setUserId] = useState<number>();
//   const { data: posts, error, isLoading } = usePosts(userId);

//   if (isLoading) return <div className="text-danger">Loading...</div>;

//   if (error) return <p className="text-danger">{error.message}</p>;

//   return (
//     <>
//       <select
//         className="form-select mb-3"
//         onChange={(evt) => setUserId(parseInt(evt.target.value))}
//         value={userId || undefined}
//       >
//         <option value=""></option>
//         <option value="1">User 1</option>
//         <option value="2">User 2</option>
//         <option value="3">User 3</option>
//       </select>
//       <ul className="list-group">
//         {posts?.map((post) => (
//           <li key={post.id} className="list-group-item">
//             {post.title}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

/* USING PAGINATION WITH PREV AND NEXT BUTTONS */
// export const PostList = () => {
//   const pageSize = 10;
//   const [page, setPage] = useState(1);
//   const { data: posts, error, isLoading } = usePosts({ page, pageSize });

//   if (isLoading) return <div className="text-danger">Loading...</div>;

//   if (error) return <p className="text-danger">{error.message}</p>;

//   return (
//     <>
//       <ul className="list-group">
//         {posts?.map((post) => (
//           <li key={post.id} className="list-group-item">
//             {post.title}
//           </li>
//         ))}
//       </ul>
//       <button
//         disabled={page === 1}
//         className="btn btn-primary me-3"
//         onClick={() => setPage(page - 1)}
//       >
//         Prev
//       </button>
//       <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
//         Next
//       </button>
//     </>
//   );
// };
