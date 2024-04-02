import "./Login.scss";
import React, {  useState, useContext } from "react";
import {  FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

const Login = ({ onLogin }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setLoggedInUser } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
      try {
        const response =  await axios.post('http://localhost:8080/users/login', { username, password });
              const loggedInUser = response.data.username;
              setLoggedInUser(loggedInUser);
              onLogin();
              navigate('/attractions');
      } catch (error) {
          console.error('Login failed:', error.response.data.error);
      }
  };
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
            onChange={(e) => setUsername(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="form__icon" />
          </div>

        <button  className="form__button" onClick={handleLogin} type="submit">
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



