import React from "react";
import {useLocation} from 'react-router-dom';

export const View = () => {
    const location = useLocation();

    const {firstName,lastName,email,address} = location.state;
    
   
    return(
        <div className="parent-div">
            <h1>DashBoard - Page</h1>
            <h2>FirstName : {firstName}</h2>
            <h2>LastName : {lastName}</h2>
            <h2>Email : {email}</h2>
            <h2>Address : {address}</h2>
        </div>
    )
}