import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/login/login";
import RegisterPage from "../page/register/register";
import HomePage from "../page/Home/Home";
import MainLayout from "../layout/MainLayout";
import ProjectsPage from "../page/Projects/projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
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
