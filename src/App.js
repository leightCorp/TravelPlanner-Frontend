import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { login, registerRoute } from "./routes/auth-routes";
import { userRoutes } from "./routes/user-routes";
import { hotelRoutes } from "./routes/hotel-routes";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const routes = createBrowserRouter([
    registerRoute,
    login,
    userRoutes,
    hotelRoutes,
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
