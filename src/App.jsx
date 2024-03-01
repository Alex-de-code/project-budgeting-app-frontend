import React from "react";
import { useState, useEffect } from "react";
import Transactions from "./Transactions";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4321/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <div>
      <h1>Header Place Holder</h1>
      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <h4>Footer Place Holder</h4>
    </div>
  );
};

export default App;
