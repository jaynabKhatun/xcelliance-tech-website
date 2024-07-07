import { createBrowserRouter } from "react-router-dom";
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
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import StatisticsPage from "../Pages/Dashboard/Admin/StatisticsPage";
import ManageCupon from "../Pages/Dashboard/Admin/ManageCupon";
import ProductReviewQueue from "../Pages/Dashboard/Modarator/ProductReviewQueue";
import ReportedContent from "../Pages/Dashboard/Modarator/ReportedContent";
import AdminRoute from "./AdminRoute";
import ModaretorRoute from "./ModaretorRoute";
import CheckOutForm from "../Pages/Dashboard/Admin/UseerTable/CheckOutForm/CheckOutForm";
import Payment from "../Pages/Payment/Payment";
import AddCupon from "../Pages/Dashboard/Admin/AddCupon";
import EditCupon from "../Pages/Dashboard/Admin/EditCupon";
import PaymentSuccess from "../Pages/Dashboard/PaymentSucces/PaymentSuccess";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <Registerpage></Registerpage>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: (
          <PrivateRoute>
            <ProductsDetailsPages></ProductsDetailsPages>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dasboard></Dasboard>
      </PrivateRoute>
    ),
    children: [
      // normal user routes

      {
        path: "myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "myProducts",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <PrivateRoute>
            <UpdateItem></UpdateItem>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/productsUp/${params.id}`),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      {
        path: "paymentSuccess",
        element: <PaymentSuccess></PaymentSuccess>,
      },

      //modarator routes
      {
        path: "productReview",
        element: (
          <PrivateRoute>
            <ModaretorRoute>
              <ProductReviewQueue></ProductReviewQueue>
            </ModaretorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "reportedContent",
        element: (
          <PrivateRoute>
            <ModaretorRoute>
              <ReportedContent></ReportedContent>
            </ModaretorRoute>
          </PrivateRoute>
        ),
      },

      // admin routes
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "StatisticsPage",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <StatisticsPage></StatisticsPage>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "manageCupon",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageCupon></ManageCupon>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "addCupon",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddCupon></AddCupon>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "editCupon/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <EditCupon></EditCupon>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
