// src/components/Login.js
import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import api from "../../utils/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";
import profilePic from '../../assets/profile-pic.png'


function Login({onSwitch}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

    const onSubmit = async (data) => {
      try {
        const encodedPassword = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data.password));
        data.password = encodedPassword;
        const response = await axios.post("https://brandlete-mvp-api.onrender.com/auth/login", data);
        //const response = await axios.post("http://localhost:3000/auth/login", data)
        setMessage("Login successful!");
  
        const { token, user } = response.data;  
        localStorage.setItem("token", token);  
        localStorage.setItem("email", user.email); 
  
        navigate("/dashboard");  
      } catch (error) {
        if (error.response) {
          setMessage("Login failed: " + error.response.data.message);
        } else {
          setMessage("Login failed: An error occurred.");
        }
      }
    };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      {/* Show the login success or error message */}
      {message && <p className={styles.message}>{message}</p>}
      {/* onSubmit will call handleSubmit provided by react-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {/* Username Input */}
        <div className={styles.field}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            className={styles.input}
            {...register("username", { required: "Username is required" })}
          />
          {/* Show error message if username is invalid */}
          {errors.username && <p className={styles.error}>{errors.username.message}</p>}
        </div>

        {/* Password Input */}
        <div className={styles.field}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className={styles.input}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {/* Show error message if password is invalid */}
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>
          Login
        </button>
      </form>
      <p>
      Don't have an account? <span onClick={onSwitch}>Register here</span>
    </p>
    </div>
  );
}

export default Login;
