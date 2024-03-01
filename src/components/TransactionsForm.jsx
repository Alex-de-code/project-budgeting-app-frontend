import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const TransactionsForm = ({ setTransactions, setToggleTransactionsForm }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [newTransaction, setNewTransaction] = useState({
    item_name: "",
    amount: "",
    date: "",
    from: "",
    category: "",
  });

  function handleChange(e) {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTransaction),
    };

    fetch(`http://localhost:4321/transactions`, options)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions))
      // we set to false so that this dissappears from the screen
      .then(() => setToggleTransactionsForm(false))
      //reset the form (brute force way)
      .then(() =>
        setNewTransaction({
          item_name: "",
          amount: "",
          date: "",
          from: "",
          category: "",
        })
      );
  }

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
        <Link to={"/"}>
          <button>Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default TransactionsForm;
