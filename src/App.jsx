import * as React from "react";
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
    useRouteError,
} from "react-router-dom";
import Index from "./pages/Index";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />,
    },
]);


export default function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}