import React, { useEffect, useState } from "react";
import api from "../../utils/api";
import CryptoJS from "crypto-js";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import styles from "./Register.module.css"; 
import profilePic from '../../assets/profile-pic.png'


function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [collegeList, setCollegeList] = useState([])


  useEffect( () => {
    const response = api.get("/api/getUniversityList");
    response.then(res => setCollegeList(res.data))
    //setCollegeList(response.data)
  },[])

  const onSubmit = async (data) => {
    try {
      const encodedPassword = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data.password));
      data.password = encodedPassword;

      //const response = await axios.post('https://brandlete-mvp-api.onrender.com/auth/register', data);
      const response = await api.post('/auth/register', data);

      console.log('User registered successfully', response.data);
      navigate('/login')
    } catch (error) {
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
        <img src={profilePic} alt="Logo" className={styles.logo} />
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
          {/* <div className={styles.field}>
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
          </div> */}

          {/* College Name Field */}
          <div className={styles.field}>
            <label htmlFor="college">College Name</label>
            <select
              id="college"
              className={styles.input}
              {...register("college", { required: "College name is required" })}
            >
              <option value="">Select College</option>
              {collegeList.map((college, index) => (
                <option key={index} value={college.school_name}>
                  {college.school_name}
                </option>
              ))}
            </select>
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
