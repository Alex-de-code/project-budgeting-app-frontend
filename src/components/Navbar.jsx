import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <h3>Budgeting App</h3>
        <Link to={"/new"}>
          <button>Add Transaction</button>
        </Link>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
