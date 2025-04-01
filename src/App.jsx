import RouteApp from "@route/route";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SideBarProvider } from "@context/SideBarProvider";
import SideBar from "@component/SideBar/SideBar";
function App() {
  const router = createBrowserRouter(RouteApp, {
    future: {
      v7_normalizeFormMethod: true,
    },
  });
  return (
    <SideBarProvider>
      <SideBar />
      <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
    </SideBarProvider>
  );
}

export default App;
