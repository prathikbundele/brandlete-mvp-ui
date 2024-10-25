// src/components/Register.js
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Import axios
import styles from "./Register.module.css"; // Import CSS module

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Make a POST request to the server to register the user
      const response = await axios.post('http://localhost:3000/api/register', data);

      // Handle successful response
      console.log('User registered successfully', response.data);
    } catch (error) {
      // Handle errors
      if (error.response) {
        console.log('Error:', error.response.data);
      } else if (error.request) {
        console.log('Error: No response from the server');
      } else {
        console.log('Error:', error.message);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <img src="/Images/logo.png" alt="Logo" className={styles.logo} />
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* first name Field */}
          <div className={styles.field}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              className={styles.input}
              {...register("firstName", {
                required: "first name is required",
                pattern: {
                  value: /^[a-zA-Z0-9._]+$/,
                  message: "Invalid username",
                },
              })}
            />
            {errors.username && <p className={styles.error}>{errors.username.message}</p>}
          </div>

          {/* last name Field */}
          <div className={styles.field}>
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              className={styles.input}
              {...register("lastName", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z0-9._]+$/,
                  message: "Invalid username",
                },
              })}
            />
            {errors.username && <p className={styles.error}>{errors.username.message}</p>}
          </div>

          {/* Username Field */}
          <div className={styles.field}>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              className={styles.input}
              {...register("username", {
                required: "Username is required",
                pattern: {
                  value: /^[a-zA-Z0-9._]+$/,
                  message: "Invalid username",
                },
              })}
            />
            {errors.username && <p className={styles.error}>{errors.username.message}</p>}
          </div>

          {/* Email Field */}
          <div className={styles.field}>
            <label htmlFor="email">Email ID</label>
            <input
              id="email"
              type="email"
              className={styles.input}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className={styles.input}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/,
                  message: "Password must be at least 8 characters long and contain at least one letter and one number",
                },
              })}
            />
            {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          </div>

          {/* Instagram Username Field */}
          <div className={styles.field}>
            <label htmlFor="instagram">Instagram Username</label>
            <input
              id="instagram"
              type="text"
              className={styles.input}
              {...register("instagram", {
                required: "Instagram username is required",
                pattern: {
                  value: /^[a-zA-Z0-9._]+$/,
                  message: "Invalid Instagram username",
                },
              })}
            />
            {errors.instagram && <p className={styles.error}>{errors.instagram.message}</p>}
          </div>

          {/* College Name Field */}
          <div className={styles.field}>
            <label htmlFor="college">College Name</label>
            <input
              id="college"
              type="text"
              className={styles.input}
              {...register("college", { required: "College name is required" })}
            />
            {errors.college && <p className={styles.error}>{errors.college.message}</p>}
          </div>

          {/* Sport Name Field */}
          <div className={styles.field}>
            <label htmlFor="sport">Sport Name</label>
            <input
              id="sport"
              type="text"
              className={styles.input}
              {...register("sport", { required: "Sport name is required" })}
            />
            {errors.sport && <p className={styles.error}>{errors.sport.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
