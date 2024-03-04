import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Transactions = ({ transactions, setTransactions }) => {
  // state for transacions total
  const [transactionTotal, setTransactionTotal] = useState(0);
  const [color, setColor] = useState("");

  useEffect(() => {
    let total = 0;

    transactions.forEach((transaction) => {
      //add each transaction.amount to total and convert transaction.amount to a number with "+" infront
      total += +transaction.amount;
    });

    setTransactionTotal(total);

    if (total < 0) {
      setColor("red");
    } else if (total >= 0 && total < 100) {
      setColor("yellow");
    } else {
      setColor("green");
    }
  }, [transactions]);

  if (transactions.length === 0) return null;

  return (
    <div className="bg-blue-200 xs:py-5">
      <div className="xs:mx-5 py-5 px-5 bg-zinc-200 rounded-3xl shadow">
        <h1 className="xs: text-2xl">Transactions</h1>
        <h2 className="xs: text-xl">
          Total: <span className={color}>{transactionTotal}</span>
        </h2>
        <div className="overflow-y-auto h-72">
          {transactions.map(({ id, item_name, amount, date }) => (
            <div
              className="grid xs:grid-cols-5 my-2 bg-white rounded-md"
              key={id}
            >
              <div className="col-span-4 ml-2">
                <Link to={`/${id}`}>
                  <h6>Name: {item_name}</h6>
                </Link>
                <h6>Date: {date}</h6>
                <h6>Amount: ${amount}</h6>
              </div>
              <div>
                <Link to={`/${id}`}>
                  <button className="bg-white rounded p-1 hover:bg-zinc-400 mt-5">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
