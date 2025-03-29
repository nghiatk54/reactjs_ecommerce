import HomePage from "@page/HomePage/HomePage";

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
