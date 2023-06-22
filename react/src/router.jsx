import { createBrowserRouter, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import DefaultLayout from "./components/DefaultLayout";
import ViewSite from "./views/ViewSite";
import ViewEmployee from "./views/ViewEmployee";
import CreateSite from "./views/CreateSite";
import CreateEmployee from "./views/CreateEmployee";
import CreateRecord from "./views/CreateRecord";
import Records from "./views/Records";

const router = createBrowserRouter([
      {
        path: "/",
        element: <DefaultLayout />,
        children: [
          {
            path: '/dashboard',
            element: <Navigate to="/" />
          },
          {
            path: "/",
            element: <Dashboard />,
          },
          {
            path: "/sites",
            element: <ViewSite />,
          },
          {
            path: "/sites/new",
            element: <CreateSite />
          },
          {
            path:"/employees",
            element: <ViewEmployee />,
          },
          {
            path: "/signup",
            element: <CreateEmployee />
          },
          {
            path: "/new_record",
            element: <CreateRecord />
          },
          {
            path: "/records",
            element: <Records />
          },
        //   {
        //     path: "/surveys/create",
        //     element: <SurveyView />,
        //   },
        //   {
        //     path: "/surveys/:id",
        //     element: <SurveyView />,
        //   },
        ],
      },
    {
        path: "/login",
        element: <Login />,
    },

]);

export default router;