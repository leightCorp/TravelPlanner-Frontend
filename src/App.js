import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { login, registerRoute } from "./routes/auth-routes";
import { userRoutes } from "./routes/user-routes";
import { hotelRoutes } from "./routes/hotel-routes";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContextProvider } from "./store/auth-context";

function App() {
  const routes = createBrowserRouter([
    registerRoute,
    login,
    userRoutes,
    hotelRoutes,
  ]);

  return (
    <AuthContextProvider>
      <RouterProvider router={routes} />
    </AuthContextProvider>
  );
}

export default App;
