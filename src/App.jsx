import RouteApp from "@route/index";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const router = createBrowserRouter(RouteApp);
  return <RouterProvider router={router} />;
}

export default App;
