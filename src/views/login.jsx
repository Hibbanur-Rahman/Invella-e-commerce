import React, { useState } from "react";
import axios from "axios";
import Banner from "../components/banner";
import "../assets/styles/login.css";
import Cookies from "js-cookie";
import { toast } from "react-toastify";


const Login = () => {
  const [loginData, setLoginData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const [registerData, setRegisterData] = useState({
    userName: "",
    registerEmail: "",
    registerPassword: "",
    registerPhone: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://54.86.160.111:8000/user-Login", {
        email: loginData.loginEmail,
        password: loginData.loginPassword,
      });
      if (response.status === 200) {
        const token = response.data.data.token;
        Cookies.set("token", token, { expires: 1 });
        console.log("Login Successful and the user:", response.data);
        toast.success("login successfully!!!");
        setLoginData({
          loginEmail: "",
          loginPassword: "",
        });
        setTimeout(()=>{
          if(response.data.data.role=== 'user'){
            window.location.href='/Invella-e-commerce/#/user/'
          }
          else if(response.data.data.role=== 'admin'){
            window.location.href='/Invella-e-commerce/#/admin/'

          }
        },1000)
      } else {
        toast.error("Login Failed!!")
        console.error("Login Failed");
      }
    } catch (error) {
      toast.error("Login Failed!!")
      console.error("Error:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://54.86.160.111:8000/user-Register", {
        username: registerData.userName,
        email: registerData.registerEmail,
        password: registerData.registerPassword,
        phone: registerData.registerPhone,
      });

      if (response.status === 201) {
        console.log("Registraion successfull:", response.data);
        toast.success("Register Successfully");
        setRegisterData({
          userName: "",
          registerEmail: "",
          registerPassword: "",
          registerPhone: "",
        });
      } else {
        console.error("Registration failed");
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("registration failed");
    }
  };
  const handleLoginInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleRegisterInputChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Banner head="MY ACCOUNT" path="Home / My account" />
      <div className="login row m-0 p-0 justify-content-center mt-5 mb-5 pt-5 pb-5">
        <div className="col-12 col-md-5 p-5">
          <form
            action="/user-Login"
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
            action="/user-Register"
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
              <label htmlFor="registerPhone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="registerPhone"
                name="registerPhone"
                value={registerData.registerPhone}
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
