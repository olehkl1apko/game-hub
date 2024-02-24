import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserDetail = () => {
  const params = useParams();
  // console.log("🚀 ~ params:", params); //{id: '1'}
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log("🚀 ~ searchParams:", searchParams.toString()); // name=Oleh&age=25 - after '?'
  // const location = useLocation();
  // console.log("🚀 ~ location:", location); // {"pathname": "/users/1", "search": "?name=Oleh&age=25", "hash": "", "state": null, "key": "default" }

  return <div>User {params.id}</div>;
};

export default UserDetail;
