import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../page/login/page";
import RegisterPage from "../page/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
