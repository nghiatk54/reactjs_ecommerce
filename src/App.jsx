import RouteApp from "@route/route";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter(RouteApp, {
    future: {
      v7_normalizeFormMethod: true,
    },
  });
  return (
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  );
}

export default App;
