import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./components/Layout.jsx";
import TaskBrowse from "./pages/TaskBrowse.jsx";
import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import TaskPosting from "./pages/TaskPosting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "tasks",
        element: <TaskBrowse />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthPage />,
  },{
    path: "posting",
    element: <TaskPosting />,
  },
  
]);

export default router;
