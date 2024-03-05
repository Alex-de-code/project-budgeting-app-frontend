import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const TransactionsForm = ({ setTransactions, apiUrl }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newTransaction, setNewTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  function handleChange(e) {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      };
      fetch(`${apiUrl}/transactions/${id}`, options)
        .then((res) => res.json())
        .then((data) => {
          console.log("Response data:", data);
          setTransactions(data.transactions);
          // setNewTransaction(data.newTransaction);
        })
        .then(() => navigate("/"))
        .catch((error) => {
          console.error("Error updating transaction:", error);
        });
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTransaction),
      };

      fetch(`${apiUrl}/transactions`, options)
        .then((res) => res.json())
        .then((data) => {
          console.log("Response data:", data);
          setTransactions(data.transactions);
          // setNewTransaction(data.newTransaction);
        })
        .then(() => navigate("/"))
        .catch((error) => {
          console.error("Error creating transaction:", error);
        });
    }
  }

  useEffect(() => {
    if (id) {
      fetch(`${apiUrl}/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // transaction is the obj for the show view/ id view from the backend
          setNewTransaction(data.transaction);
        });
    } else {
      // Reset the form fields if no id (indicating a new transaction)
      setNewTransaction({
        item_name: "",
        amount: 0,
        date: "",
        from: "",
        category: "",
      });
    }
  }, [id]);

  return (
    <div className="bg-blue-200 xs:py-5">
      <div className="xs:mx-5 bg-zinc-200 rounded-3xl shadow">
        <h1 className="text-center xs: text-2xl pt-5">Transactions Form</h1>
        <form className="grid xs:px-10" onSubmit={handleSubmit}>
          <label htmlFor="item_name">
            Item Name:
            <input
              className="border-2 border-blue-400 rounded hover:border-orange-400 bg-zinc-50 mt-3 ml-3 shadow"
              onChange={handleChange}
              type="text"
              id="item_name"
              name="item_name"
              value={newTransaction.item_name}
              required
            />
          </label>
          <label htmlFor="amount">
            Amount:
            <input
              className="border-2 border-blue-400 rounded hover:border-orange-400 bg-zinc-50 mt-3 ml-3 shadow"
              onChange={handleChange}
              type="number"
              id="amount"
              name="amount"
              value={newTransaction.amount}
              required
            />
          </label>
          <label htmlFor="date">
            Date:
            <input
              className="border-2 border-blue-400 rounded hover:border-orange-400 bg-zinc-50 mt-3 ml-3 shadow"
              onChange={handleChange}
              type="date"
              id="date"
              name="date"
              value={newTransaction.date}
              required
            />
          </label>
          <label htmlFor="from">
            From:
            <input
              className="border-2 border-blue-400 rounded hover:border-orange-400 bg-zinc-50 mt-3 ml-3 shadow"
              onChange={handleChange}
              type="text"
              id="from"
              name="from"
              value={newTransaction.from}
              required
            />
          </label>
          <label htmlFor="category">
            Category:
            <input
              className="border-2 border-blue-400 rounded hover:border-orange-400 bg-zinc-50 my-3 ml-3 shadow"
              onChange={handleChange}
              type="text"
              id="category"
              name="category"
              value={newTransaction.category}
              required
            />
          </label>
          <div className="grid-flow-row mb-8 mt-5">
            <input
              className="rounded w-3/5 py-1 bg-green-400 hover:bg-green-500 shadow"
              type="submit"
            />
            <Link to={`/`}>
              <button className="rounded bg-zinc-400 w-1/4 py-1 justify-end ml-8 hover:bg-zinc-500 shadow">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionsForm;
