import RouteApp from "@route/route";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SideBarProvider } from "@context/SideBarProvider";
import { ToastProvider } from "@context/ToastProvider";
import { StoreProvider } from "@context/StoreProdiver";
import SideBar from "@component/SideBar/SideBar";
function App() {
  const router = createBrowserRouter(RouteApp, {
    future: {
      v7_normalizeFormMethod: true,
    },
  });
  return (
    <StoreProvider>
      <ToastProvider>
        <SideBarProvider>
          <SideBar />
          <RouterProvider
            router={router}
            fallbackElement={<div>Loading...</div>}
          />
        </SideBarProvider>
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
