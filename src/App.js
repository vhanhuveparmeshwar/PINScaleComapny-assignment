import React from "react";
import CreditDebitTotals from "./components/CreditDebitTotals";
import Last7DaysTotals from "./components/Last7DaysTotals";
import AllTransactions from "./components/AllTransactions";
import CreditDebitTotalsUser from "./components/CreditDebitTotalsUser";
import Last7DaysTotalsUser from "./components/Last7DaysTotalsUser";
import AddTransaction from "./components/AddTransaction";
import UpdateTransaction from "./components/UpdateTransaction";
import DeleteTransaction from "./components/DeleteTransaction";
import Profile from "./components/Profile";
import GetUserId from "./components/GetUserId";
import "./App.css";

const App = () => (
  <div className="App">
    <CreditDebitTotals />
    <Last7DaysTotals />
    <AllTransactions />
    <CreditDebitTotalsUser />
    <Last7DaysTotalsUser />
    <AddTransaction />
    <UpdateTransaction />
    <DeleteTransaction />
    <Profile />
    <GetUserId />
  </div>
);

export default App;
