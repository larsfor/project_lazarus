import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import MainScreen from "../components/MainScreen";
import ErrorPage from "../components/ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainScreen />,
            errorElement: <ErrorPage />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Router;