// src/components/Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://bursting-gelding-24.hasura.app/api/rest/profile", {
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
        console.error("Error fetching profile data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Balance: {data.balance}</p>
        </>
      )}
    </div>
  );
};

export default Profile;
