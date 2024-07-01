import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../page/login/login";
import RegisterPage from "../page/register/register";
import HomePage from "../page/Home/Home";
import MainLayout from "../layout/MainLayout";
import ProjectsPage from "../page/Projects/projects";
import DashboardLayout from "../layout/DashboardLayout";
import AddProject from "../page/Dashboard/AddProject";
import ManageProject from "../page/Dashboard/ManageProject";
import BlogsPage from "../page/blogs/Blogs";
import ProtectedRoute from "./ProtectedRoute";

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
      {
        path: "/blogs",
        element: (
          <ProtectedRoute>
            <BlogsPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "add-project",
        element: <AddProject />,
      },
      {
        path: "manage-project",
        element: <ManageProject />,
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
