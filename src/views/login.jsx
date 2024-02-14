import React, { useState } from "react";
import axios from 'axios';
import Banner from "../components/banner";
import "../assets/styles/login.css";



const Login = () => {


  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [registerData,setRegisterData]= useState({
    userName:"",
    registerEmail:"",
    registerPassword:"",
  })
  const handleLogin = async (e) => {
    e.preventDefault();

    try{
      const response= await axios.post("http://localhost:8000/login",{
        email:loginData.loginEmail,
        password:loginData.loginPassword,
      })
      if(response.status===200){
        console.log("Login Successful and the user:",response.data);
        window.location.href = '/';
      }
      else{
        console.error("Login Failed");
      }
    }catch(error){
      console.error("Error:",error);
    }
  };

  const handleRegister=async (e)=>{
    e.preventDefault();
    try{
      const response= await axios.post("http://localhost:8000/register",{
        username:registerData.userName,
        email:registerData.registerEmail,
        password:registerData.registerPassword,
      });

      if(response.status===200){
        console.log("Registraion successfull:",response.data);
      }else{
        console.error("Registration failed");
      }
    }catch(error){
      console.error("Error:",error);
    }
  }
  const handleLoginInputChange=(e)=>{
    setLoginData({...loginData,[e.target.name]:e.target.value});
  }
  const handleRegisterInputChange=(e)=>{
    setRegisterData({...registerData,[e.target.name]:e.target.value})
  }


  return (
    <>
      <Banner head="MY ACCOUNT" path="Home / My account" />
      <div className="login row m-0 p-0 justify-content-center mt-5 mb-5 pt-5 pb-5">
        <div className="col-12 col-md-5 p-5">
          <form
            action="/login"
            method="post"
            className="login-form"
            onSubmit={handleLogin}
          >
            <h3 className="mb-3">Login</h3>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                name="loginEmail"
                value={loginData.loginEmail}
                onChange={handleLoginInputChange}
                aria-describedby="loginEmailHelp"
              />
              <div id="loginEmailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                name="loginPassword"
                value={loginData.loginPassword}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <div className="row m-0 p-0 justify-content-center">
              <button type="submit" className="btn text-light w-auto ps-4 pe-4">
                Log in
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-5 p-5">
          <form
            action="/register"
            method="post"
            className="login-form"
            onSubmit={handleRegister}
          >
            <h3 className="mb-3">Register</h3>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="userName"
                name="userName"
                value={registerData.userName}
                onChange={handleRegisterInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="registerEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="registerEmail"
                name="registerEmail"
                value={registerData.registerEmail}
                onChange={handleRegisterInputChange}
                aria-describedby="registerEmailHelp"
                required
              />
              <div id="registerEmailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="registerPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="registerPassword"
                name="registerPassword"
                value={registerData.registerPassword}
                onChange={handleRegisterInputChange}
                required
              />
            </div>
            <div className="row m-0 p-0">
              <button type="submit" className="btn text-light w-auto ps-4 pe-4">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
