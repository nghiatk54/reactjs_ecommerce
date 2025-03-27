import HomePage from "@page/HomePage/HomePage";

const PublicRoute = [
  {
    path: "/public",
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
];

export default PublicRoute;
