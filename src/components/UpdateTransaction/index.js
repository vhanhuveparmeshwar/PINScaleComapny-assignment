// src/components/UpdateTransaction.js
import React, { useState } from "react";
import axios from "axios";

const UpdateTransaction = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://bursting-gelding-24.hasura.app/api/rest/update-transaction",
        {
          id: parseInt(formData.id),
          name: formData.name,
          type: formData.type,
          category: formData.category,
          amount: parseFloat(formData.amount),
          date: formData.date,
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
        console.log("Transaction updated successfully:", response.data);
        // Add logic to handle success, e.g., show a success message or refresh the data
      })
      .catch((error) => {
        console.error("Error updating transaction:", error);
        // Add logic to handle error, e.g., show an error message
      });
  };

  return (
    <div>
      <h2>Update Transaction</h2>
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
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Transaction</button>
      </form>
    </div>
  );
};

export default UpdateTransaction;
