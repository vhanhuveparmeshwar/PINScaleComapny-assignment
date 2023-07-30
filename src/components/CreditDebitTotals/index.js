// src/components/CreditDebitTotals.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const CreditDebitTotals = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin",
        {
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-role": "admin",
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
      <h2>Credit Debit Totals - Admin</h2>
      <p>Credit: {data.credit}</p>
      <p>Debit: {data.debit}</p>
      <p>Total: {data.total}</p>
    </div>
  );
};

export default CreditDebitTotals;
