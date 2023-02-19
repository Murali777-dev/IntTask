import React from "react";
import "./styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
  });

  const {isClicked,setIsCliked} = useState(false);

  const [arrobj,setArrObj] = useState([]);

  function onChange(event) {
    // console.log(event);
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }

  const submitHan = (event) => {
    event.preventDefault();
    setArrObj([...arrobj,data]);
  };


  const navigateFunc = (each) => {
    navigate('/view',{state : each})
    console.log(each.firstName);
  };


  function eachElementFunc(each,index){
      return(
          <tr key={index}>
              <td>{each.firstName}</td>
              <td>{each.lastName}</td>
              <td>{each.email}</td>
              <td>{each.address}</td>
              <td><button onClick={() => navigateFunc(each)}>View</button></td>
          </tr>
      )
  };

  return (
      <>
    <div className="parent-div">
        {console.log(arrobj)}
      <form onSubmit={submitHan}>
        <h1>Login - Page</h1>
        <input
          placeholder="Enter FirstName Here"
          name="firstName"
          value={data.firstName}
          onChange={onChange}
        />
        <input
          placeholder="Enter LastName Here"
          name="lastName"
          value={data.lastName}
          onChange={onChange}
        />
        <input
          placeholder="Enter Email Here"
          name="email"
          value={data.email}
          onChange={onChange}
        />
        <input
          placeholder="Enter Address Here"
          name="address"
          value={data.address}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
    </div>
    <div className="table-div">
        <table>
                <thead>
                    <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>email</th>
                    <th>address</th>
                    <th>View - Button</th>
                    </tr>
                </thead>
            <tbody>
               {arrobj.map(eachElementFunc)}
            </tbody>
        </table>
    </div>
    </>
  );
};
