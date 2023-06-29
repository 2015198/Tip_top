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
import EditRecord from "./views/EditRecord";

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
            path: "/newsite",
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
          // {
          //   path: "/newrecord",
          //   element: <CreateRecord />
          // },
          // {
          //   path: "/editrecord",
          //   element: <EditRecord />
          // },
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