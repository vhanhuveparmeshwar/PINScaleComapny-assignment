// src/components/Last7DaysTotalsUser.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Last7DaysTotalsUser = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-7-days",
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
      <h2>Last 7 Days Credit Debit Totals - User</h2>
      <ul>
        {Array.isArray(data) ? (
          data.map((item) => (
            <li key={item.date}>
              <p>Date: {item.date}</p>
              <p>Credit: {item.credit}</p>
              <p>Debit: {item.debit}</p>
              <p>Total: {item.total}</p>
            </li>
          ))
        ) : (
          <li>
            <p>No data available.</p>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Last7DaysTotalsUser;
