import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Transactions from "./components/Transactions";
import TransactionDetails from "./components/TransactionDetails";
import TransactionsForm from "./components/TransactionsForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  // this state sets array with all transactions
  const [transactions, setTransactions] = useState([]);
  //this state will toggle the TransactionDetails component and send the id

  useEffect(() => {
    fetch("http://localhost:4321/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

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
          element={<TransactionDetails setTransactions={setTransactions} />}
        />
        <Route
          path="/edit/:id"
          element={<TransactionsForm setTransactions={setTransactions} />}
        />
        <Route
          path="/new/"
          element={<TransactionsForm setTransactions={setTransactions} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
