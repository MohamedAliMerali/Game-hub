import { createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";
import Aside from "./component/Aside";
import Main from "./component/Main";
import Games from "./component/Games";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // PS 2: since the string of the path is null, we remove that property
      // and add index prop to true, means if the user is on the location
      // of the parent, that's the default component that should be
      // rendered inside the outlet
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
