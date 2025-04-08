import { lazy } from "react";

const HomePage = lazy(() => import("@page/HomePage/HomePage"));

const PublicRoute = [
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
];

export default PublicRoute;
