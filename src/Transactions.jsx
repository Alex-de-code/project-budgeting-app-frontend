import { useEffect } from "react";

const Transactions = ({ transactions, setTransactions }) => {
  console.log(transactions);
  return (
    <div>
      <div>
        <h1>Transactions</h1>
        {transactions.map(({ id, item_name, amount, date, from, category }) => (
          <div key={id}>
            <h6>Name: {item_name}</h6>
            <h6>Amount: ${amount}</h6>
            <h6>Category: {category}</h6>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
