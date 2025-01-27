import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Transactions from "./components/Transactions";
import TransactionDetails from "./components/TransactionDetails";
import TransactionsForm from "./components/TransactionsForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TransactionChart from "./components/TransactionChart";

const App = () => {
  // Define apiUrl variable using environment variable
  const apiUrl = import.meta.env.VITE_API_URL;
  // this state sets array with all transactions
  const [transactions, setTransactions] = useState([]);
  //this state will toggle the TransactionDetails component and send the id

  //useState for our chart component
  const [userData, setUserData] = useState({
    labels: [],
    dataSets: [
      {
        label: "Battle Report",
        data: [],
      },
    ],
  });

  useEffect(() => {
    fetch(`${apiUrl}/transactions`)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  // useEffect(() => {
  //   setUserData((prevUserData) => ({
  //     ...prevUserData,
  //     labels: transactions.map((data) => data.date),
  //     dataSets: [
  //       {
  //         ...prevUserData.dataSets[0],
  //         data: transactions.map((data) => data.amount),
  //       },
  //     ],
  //   }));
  // }, [transactions]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Transactions
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <TransactionDetails
              setTransactions={setTransactions}
              apiUrl={apiUrl}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <TransactionsForm
              setTransactions={setTransactions}
              apiUrl={apiUrl}
            />
          }
        />
        <Route
          path="/new/"
          element={
            <TransactionsForm
              setTransactions={setTransactions}
              apiUrl={apiUrl}
            />
          }
        />
      </Routes>
      {/* <TransactionChart chartData={userData} /> */}
      <Footer />
    </div>
  );
};

export default App;
