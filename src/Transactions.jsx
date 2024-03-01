import { useEffect } from "react";

const Transactions = ({
  transactions,
  setTransactions,
  setToggleTransactions,
}) => {
  useEffect(() => {
    fetch("http://localhost:4321/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  if (transactions.length === 0) return null;

  return (
    <div>
      <div>
        <h1>Transactions</h1>
        {transactions.map(({ id, item_name, amount, date }) => (
          <div key={id}>
            <h6>Name: {item_name}</h6>
            <h6>Date: {date}</h6>
            <h6>Amount: ${amount}</h6>
            <button
              onClick={() => setToggleTransactions({ show: true, id: id })}
            >
              Details
            </button>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
