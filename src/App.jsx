import React from "react";
import { useState, useEffect } from "react";
import Transactions from "./Transactions";
import TransactionDetails from "./TransactionDetails";

const App = () => {
  // this state sets array with all transactions
  const [transactions, setTransactions] = useState([]);
  //this state will toggle the Transactions component and send the id
  const [toggleTransactions, setToggleTransactions] = useState({
    show: false,
    id: null,
  });

  return (
    <div>
      <h1>Header Place Holder</h1>
      <Transactions
        transactions={transactions}
        setTransactions={setTransactions}
        setToggleTransactions={setToggleTransactions}
      />
      <TransactionDetails toggleTransactions={toggleTransactions} />
      <h4>Footer Place Holder</h4>
    </div>
  );
};

export default App;
