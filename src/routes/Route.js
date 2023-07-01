import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import SignUp from "../authentication/SignUp";
import Login from "../authentication/Login";
import CategoryProduct from "../components/CategoryProduct";
import BookingForm from "../components/BookingForm";
import MyOrders from "../Dashboard/MyOrders";
import AddProduct from "../Dashboard/AddProduct";
import AllBuyer from "../Dashboard/AllBuyer";
import MyProduct from "../Dashboard/MyProduct";

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
            },
            {
                path: "/myorders",
                element : <MyOrders></MyOrders>
            },
            {
                path: "/addProduct",
                element : <AddProduct></AddProduct>
            },
            {
                path: "/allbuyer",
                element : <AllBuyer></AllBuyer>
            },
            {
                path: "/myproduct",
                element : <MyProduct></MyProduct>
            }
        ]
        
    },
    
])