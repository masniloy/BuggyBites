import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layouts/Dashboard";
import Menus from "../pages/Menus";
import PrivateRoutes from "./PrivateRoutes";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddFood from "../pages/dashboard/AddFood";
import EditFood from "../pages/dashboard/EditFood";
import AllFood from "../pages/dashboard/AllFood";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "menus",
                element: <Menus />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },


        ]

    },


    {
        path: "/dashboard",
        element: (
            <PrivateRoutes>
                <Dashboard />
            </PrivateRoutes>
        ),
        children: [
            {
                index: true,
                element: <DashboardHome />,
            },
            {
                path: "allFood",
                element: <AllFood />,
            },
            {
                path: "addFood",
                element: <AddFood />,
            },
            {
                path: "editFood/:id",
                element: <EditFood />,
            },
        ]
    }
]);

export default router;