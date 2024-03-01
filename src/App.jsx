import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Transactions from "./components/Transactions";
import TransactionDetails from "./components/TransactionDetails";
import TransactionsForm from "./components/TransactionsForm";

const App = () => {
  // this state sets array with all transactions
  const [transactions, setTransactions] = useState([]);
  //this state will toggle the Transactions component and send the id
  const [toggleTransactions, setToggleTransactions] = useState({
    show: false,
    id: null,
  });
  const [toggleTransactionsForm, setToggleTransactionsForm] = useState(false);

  return (
    <div>
      <h1>Header Place Holder</h1>
      <Routes>
        <Route
          path="/"
          element={
            <Transactions
              transactions={transactions}
              setTransactions={setTransactions}
              setToggleTransactions={setToggleTransactions}
            />
          }
        />
        <Route
          path="/:id"
          element={
            <TransactionDetails
              toggleTransactions={toggleTransactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route
          path="/new"
          element={
            <TransactionsForm
              setTransactions={setTransactions}
              setToggleTransactionsForm={setToggleTransactionsForm}
            />
          }
        />
      </Routes>
      <h4>Footer Place Holder</h4>
    </div>
  );
};

export default App;
