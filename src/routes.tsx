import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Aside from "./component/Aside";
import Main from "./component/Main";
import Games from "./component/Games";
import ErrorPage from "./component/ErrorComponents/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <div className="flex flex-row mt-16">
            <Aside />
            <Main />
          </div>
        ), // todo: Change this it's ugly
      },
      { path: "games/:id", element: <Games /> },
    ],
  },
]);

export default router;
