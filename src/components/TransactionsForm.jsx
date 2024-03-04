import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const TransactionsForm = ({ setTransactions }) => {
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
      fetch(`http://localhost:4321/transactions/${id}`, options)
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

      fetch(`http://localhost:4321/transactions`, options)
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
      fetch(`http://localhost:4321/transactions/${id}`)
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
    <div>
      <h1>Transactions Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">
          Item Name:
          <input
            onChange={handleChange}
            type="text"
            id="item_name"
            name="item_name"
            value={newTransaction.item_name}
          />
        </label>
        <label htmlFor="amount">
          Amount:
          <input
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            value={newTransaction.amount}
          />
        </label>
        <label htmlFor="date">
          Date:
          <input
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
            value={newTransaction.date}
          />
        </label>
        <label htmlFor="from">
          From:
          <input
            onChange={handleChange}
            type="text"
            id="from"
            name="from"
            value={newTransaction.from}
          />
        </label>
        <label htmlFor="category">
          Category:
          <input
            onChange={handleChange}
            type="text"
            id="category"
            name="category"
            value={newTransaction.category}
          />
        </label>
        <input type="submit" />
      </form>
      <Link to={`/`}>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default TransactionsForm;
