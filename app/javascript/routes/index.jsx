import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import MainScreen from "../components/MainScreen";
import ErrorPage from "../components/ErrorPage";
import ContactPage from "../components/ContactPage";
import ExcelPage from "../components/ExcelPage";
import ProgammingPage from "../components/ProgrammingPage";
import InfoPage from "../components/InfoPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <MainScreen />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <InfoPage /> },
                { path: "home/contact", element: <ContactPage /> },
                { path: "home/excel", element: <ExcelPage /> },
                { path: "home/programming", element: <ProgammingPage /> },
            ]
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Router;