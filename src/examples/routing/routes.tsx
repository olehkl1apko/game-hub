import { createBrowserRouter } from "react-router-dom";
import ContactPage from "./ContactPage";
import ErrorPage from "./ErrorPage";
import HomePage from "./HomePage";
import Layout from "./Layout";
import LoginPage from "./LoginPage";
import UserDetail from "./UserDetail";
import UserPage from "./UserPage";
import PrivateRoutes from "./PrivateRoutes";

const routerExample = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "users",
        element: <UserPage />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
      { path: "contacts", element: <ContactPage /> },
    ],
  },
]);

export default routerExample;
