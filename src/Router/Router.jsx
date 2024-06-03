import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Registerpage from "../Pages/RegisterPage/Registerpage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
            element: <Home></Home>
            },
    {
        path: '/login',
        element: <LoginPage></LoginPage>
    },
    {
        path: '/register',
        element: <Registerpage></Registerpage>
    }
]
    },
]);

