import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Transactions = ({ transactions, setTransactions }) => {
  // state for transacions total
  const [transactionTotal, setTransactionTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    transactions.forEach((transaction) => {
      //add each transaction.amount to total and convert transaction.amount to a number with "+" infront
      total += +transaction.amount;
    });
    setTransactionTotal(total);
  }, [transactions]);

  if (transactions.length === 0) return null;

  return (
    <div>
      <div>
        <h1>Transactions</h1>
        <h2>Total: {transactionTotal}</h2>
        {transactions.map(({ id, item_name, amount, date }) => (
          <div key={id}>
            <h6>Name: {item_name}</h6>
            <h6>Date: {date}</h6>
            <h6>Amount: ${amount}</h6>
            <Link to={`/${id}`}>
              <button>Details</button>
            </Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
