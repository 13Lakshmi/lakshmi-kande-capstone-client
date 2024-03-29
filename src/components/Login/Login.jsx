import "./Login.scss";
import React from "react";
import {  FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();


    const toAttractions = (event) =>{
      event.preventDefault();
      navigate("/Attractions");
  }

    const toSignUp = (event) =>{
        event.preventDefault();
        navigate("/SignUp");
    }

  return (
    <div className="form">

      <div className="form__login">
        <h1 className="form__login-title">Login</h1>

       <div className="form__input-box">
          <input
            className="form__input"
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          <MdEmail className="form__icon" />
          </div>
          
        
          
          <div className="form__input-box">
          <input
            className="form__input"
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <FaLock className="form__icon" />
          </div>
          
          
       

        <button onClick={toAttractions} className="form__button" type="submit">
          Log In
        </button>
      </div>

      <div className="form__link">
        <p onClick={toSignUp}>
          Don't have an account? <a href=" ">  Signup </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
