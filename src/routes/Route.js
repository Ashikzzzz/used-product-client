import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignUp from "../authentication/SignUp";
import Login from "../authentication/Login";
import CategoryProduct from "../components/CategoryProduct";

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
        ]
    }
])