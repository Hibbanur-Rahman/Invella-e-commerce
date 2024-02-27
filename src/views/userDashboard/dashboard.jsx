import React from "react";
import { decode } from 'jwt-js-decode';
import Cookies from "js-cookie";

const Dashboard=()=>{

    const token= Cookies.get('token')

    let jwt = decode(token);
    console.log(jwt.payload);
    return(
        <>
            <h1 className="text-dark bg-success ">Dashboard</h1>
        </>
    )
}

export default Dashboard;