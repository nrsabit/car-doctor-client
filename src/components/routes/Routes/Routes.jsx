import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";
import Checkout from "../../pages/Checkout/Checkout";
import Bookings from "../../pages/Bookings/Bookings";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "bookings",
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      }
    ]
  },
  {
    path: "login",
    element: <Login></Login>
  },
  {
    path: "signup",
    element: <SignUp></SignUp>
  }
]);

export default router