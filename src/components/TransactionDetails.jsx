import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const TransactionDetails = ({ setTransactions, apiUrl }) => {
  const [transactionDetails, setTransactionDetails] = useState();
  // takes what was typed in in URL
  const { id } = useParams();

  useEffect(() => {
    fetch(`${apiUrl}/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => setTransactionDetails(data.transaction));
  }, [id]);

  // conditional rendering
  if (!transactionDetails) return null;

  function handleDelete(id) {
    console.log(id);
    const options = {
      method: "DELETE",
    };

    fetch(`${VITE_API_URL}/transactions/${id}`, options)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }

  return (
    <div className="bg-blue-200 xs:py-5">
      <div className="xs:mx-5 bg-zinc-200 rounded-3xl shadow px-3 py-3">
        <div className="bg-zinc-100 rounded-2xl px-3 py-3 shadow">
          <h1 className="text-center text-2xl pb-1">Transaction Details</h1>
          <h6 className="">Name: {transactionDetails.item_name}</h6>
          <h6 className="pt-2">Date: {transactionDetails.date}</h6>
          <h6 className="pt-2">Amount: ${transactionDetails.amount}</h6>
          <h6 className="pt-2">From: {transactionDetails.from}</h6>
          <h6 className="pt-2">Category: {transactionDetails.category}</h6>
          <Link to={`/edit/${id}`}>
            <button className="rounded bg-yellow-400 hover:bg-yellow-500 p-1 w-full mt-2 shadow">
              Edit
            </button>
          </Link>
          <div className="flex justify-between pt-3">
            <Link to={"/"} className="flex-1 mr-1">
              <button
                className="rounded bg-red-400 hover:bg-red-500 p-1 w-full shadow"
                onClick={() => handleDelete(id)}
              >
                Delete
              </button>
            </Link>
            <Link to={`/`} className="flex-1 ml-2">
              <button className="rounded bg-zinc-400 hover:bg-zinc-500 p-1 w-full shadow">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;
