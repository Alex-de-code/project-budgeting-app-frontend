import { useEffect, useState } from "react";

const TransactionDetails = ({ toggleTransactions }) => {
  const [transactionDetails, setTransactionDetails] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4321/transactions/${toggleTransactions.id}`)
      .then((res) => res.json())
      .then((data) => setTransactionDetails(data.transactions));
  }, [toggleTransactions.id]);

  // conditional rendering
  if (!transactionDetails) return null;

  return (
    <div>
      <h4>Transaction Details</h4>
      <h6>Name: {transactionDetails.item_name}</h6>
      <h6>Date: {transactionDetails.date}</h6>
      <h6>Amount: ${transactionDetails.amount}</h6>
      <h6>From: {transactionDetails.from}</h6>
      <h6>Category: {transactionDetails.category}</h6>
    </div>
  );
};

export default TransactionDetails;
