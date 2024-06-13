import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LoginPage from "../Pages/LoginPage/LoginPage";
import Registerpage from "../Pages/RegisterPage/Registerpage";
import ErropPage from "../Pages/ErrorPage/ErropPage";
import ProductsDetailsPages from "../Pages/ProductsDetails/ProductsDetailsPages";
import Products from "../Pages/Products/Products";
import Dasboard from "../Layout/Dasboard";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import MyProfile from "../Pages/Dashboard/Myprofile/MyProfile";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import PrivateRoute from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErropPage></ErropPage>,
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
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><ProductsDetailsPages></ProductsDetailsPages></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dasboard></Dasboard>,
        children: [

            // normal user routes

            {
                path: 'myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: 'updateItem/:id',
                element: <UpdateItem></UpdateItem>,
                loader: ({ params }) => fetch(`http://localhost:5000/productsUp/${params.id}`)
            }

            // admin routes
            

        ]
    }
]);

