// src/components/Login.js
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import styles from "./Login.module.css"; // Import CSS module

function Login() {
  // Initialize useForm from react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State to store the login success or error message
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Function to handle form submission
  const onSubmit1 = async (data) => {
    try {
      // Make an API call to the login endpoint
      const response = await axios.post("http://localhost:3000/api/login", data);

      // If login is successful, display the success message
      setMessage("Login successful!");

      // Handle any further login actions (e.g., store token, redirect user, etc.)
      console.log("Login successful", response.data);
      navigate("/dashboard");
    } catch (error) {
      // Handle any errors and show an error message
      if (error.response) {
        setMessage("Login failed: " + error.response.data.message);
      } else {
        setMessage("Login failed: An error occurred.");
      }
    }
  };
    // Function to handle form submission
    const onSubmit = async (data) => {
      try {
        // Make an API call to the login endpoint
        const response = await axios.post("http://localhost:3000/api/login", data);
  
        // If login is successful, display the success message
        setMessage("Login successful!");
  
        // Store login response (e.g., token or user data) in localStorage
        const { token, user } = response.data;  // Assuming response contains token and user data
        localStorage.setItem("token", token);   // Store token in localStorage
        localStorage.setItem("email", user.email); // Store user data in localStorage as string
  
        // Handle any further login actions (e.g., store token, redirect user, etc.)
        console.log("Login successful", response.data);
        navigate("/dashboard");  // Redirect to the dashboard after successful login
      } catch (error) {
        // Handle any errors and show an error message
        if (error.response) {
          setMessage("Login failed: " + error.response.data.message);
        } else {
          setMessage("Login failed: An error occurred.");
        }
      }
    };

  return (
    <div className={styles.container}>
      <img src="/Images/logo.png" alt="Logo" className={styles.logo} />
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
    </div>
  );
}

export default Login;
