import { createContext, useEffect, useState } from "react"

export const CONTEXT = createContext()

const UserContext = ({children})=>{

const [user, setUser]= useState({})
const [loading, setLoading]=useState(true)

useEffect(()=>{
    fetch("http://localhost:5000/api/v1/users/me",{
        method: "GET",
        headers: {
            authorization: `bearer ${localStorage.getItem("token")}`,
        }
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data?.data)
       setUser(data?.data)
       setLoading(false)
    })
},[user?.email])

    const authInfo={
        user,
        setUser,
        loading
    }

    return <CONTEXT.Provider value={authInfo}>{children}</CONTEXT.Provider>;
}

export default UserContext;