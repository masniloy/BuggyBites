import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../layouts/Dashboard";
import DashboardHome from "../pages/DashboardHome";
import Menus from "../pages/Menus";

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
            }

        ]
    },

    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                index: true,
                element: <DashboardHome />
            }
        ]
    }
]);

export default router;