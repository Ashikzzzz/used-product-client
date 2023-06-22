import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignUp from "../authentication/SignUp";
import Login from "../authentication/Login";
import CategoryProduct from "../components/CategoryProduct";
import BookingForm from "../components/BookingForm";

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element : <Login></Login>
            },
            {
                path: '/product/:category_name',
                element: <CategoryProduct></CategoryProduct>,
                loader: ({params})=>{
                  return  fetch(`http://localhost:5000/api/v1/products/get-product/${params.category_name}`)
                }
            },
            {
                path: "/bookingform/:id",
                element: <BookingForm></BookingForm>,
                loader: ({params})=>{
                    return  fetch(`http://localhost:5000/api/v1/products/get-single-product/${params.id}`)
                  }
            }
        ]
    }
])