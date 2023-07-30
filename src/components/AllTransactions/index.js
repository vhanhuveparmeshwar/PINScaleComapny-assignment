// src/components/AllTransactions.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const AllTransactions = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://bursting-gelding-24.hasura.app/api/rest/all-transactions", {
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "user",
          "x-hasura-user-id": "1",
        },
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>All Transactions</h2>
      <ul>
        {data.map((transaction) => (
          <li key={transaction.id}>
            <p>Name: {transaction.name}</p>
            <p>Type: {transaction.type}</p>
            <p>Category: {transaction.category}</p>
            <p>Amount: {transaction.amount}</p>
            <p>Date: {transaction.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTransactions;
