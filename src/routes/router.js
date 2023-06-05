import {createBrowserRouter} from "react-router-dom";
import Layout from "../pages/layout";
import React from "react";
import DashBoard from "../pages/dashboard"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <DashBoard></DashBoard>
            }
        ]
        
    },

]);
export default router;