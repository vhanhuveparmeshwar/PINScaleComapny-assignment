// src/components/GetUserId.js
import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const GetUserId = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://bursting-gelding-24.hasura.app/api/rest/get-user-id",
        {
          email: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-role": "user",
            "x-hasura-user-id": "1",
          },
        }
      )
      .then((response) => {
        console.log("User ID:", response.data.id);
        // Add logic to handle the user ID, e.g., store it in state or perform further actions
      })
      .catch((error) => {
        console.error("Error fetching user ID:", error);
        // Add logic to handle error, e.g., show an error message
      });
  };

  return (
    <div>
      <h2>Get User ID</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Get User ID</button>
      </form>
    </div>
  );
};

export default GetUserId;
