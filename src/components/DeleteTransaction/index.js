// src/components/DeleteTransaction.js
import React, { useState } from "react";
import axios from "axios";
import "./index.css";

const DeleteTransaction = () => {
  const [formData, setFormData] = useState({
    id: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .delete(
        "https://bursting-gelding-24.hasura.app/api/rest/delete-transaction",
        {
          data: { id: parseInt(formData.id) },
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
        console.log("Transaction deleted successfully:", response.data);
        // Add logic to handle success, e.g., show a success message or refresh the data
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
        // Add logic to handle error, e.g., show an error message
      });
  };

  return (
    <div>
      <h2>Delete Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Transaction ID:</label>
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Delete Transaction</button>
      </form>
    </div>
  );
};

export default DeleteTransaction;
