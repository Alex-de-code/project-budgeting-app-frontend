import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TransactionDetails = ({ toggleTransactions }) => {
  const [transactionDetails, setTransactionDetails] = useState();
  // takes what was typed in in URL
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4321/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => setTransactionDetails(data.transaction));
  }, [id]);

  // conditional rendering
  if (!transactionDetails) return null;

  return (
    <div>
      <h1>Transaction Details</h1>
      <h6>Name: {transactionDetails.item_name}</h6>
      <h6>Date: {transactionDetails.date}</h6>
      <h6>Amount: ${transactionDetails.amount}</h6>
      <h6>From: {transactionDetails.from}</h6>
      <h6>Category: {transactionDetails.category}</h6>
      <Link to={`/`}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default TransactionDetails;
