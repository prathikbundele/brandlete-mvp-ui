import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create UserContext
export const UserContext = createContext();

// Create UserProvider component
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    sport: '',
    institute: '',
  });
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email'); // Or however you store login info


  // Fetch user details on mount
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const storedEmail = localStorage.getItem('email'); // Or however you store login info
        if (storedEmail) {
          const response = await axios.get(`http://localhost:3000/api/user?email=${storedEmail}`,{
            headers: {
              Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
            },
          });
          setUserDetails(response.data);
        }
      } catch (error) {
        console.log('Error fetching user details:', error);
      }
    };
    fetchUserDetails();
  }, [token, email]);

  // Function to update user details
  const updateUserDetails = async (updatedDetails) => {
    try {
      const token = localStorage.getItem('token');
      const storedEmail = localStorage.getItem('email'); // Or however you store login info
      const response = await axios.put('http://localhost:3000/api/user', {...updatedDetails, email : storedEmail}, {
        headers: {
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });
      setUserDetails((prevDetails) => ({
        ...prevDetails,
        ...updatedDetails,
      }));
    } catch (error) {
      console.error('Error updating user details:', error);
    }
  };

  return (
    <UserContext.Provider value={{ userDetails, updateUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
