import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 px-3">
      <nav className="py-2 pb-4 pt-4 flex items-center justify-between mx-3 ">
        <Link to={"/"}>
          <h3 className="text-3xl text-white ">Budgeting App</h3>
        </Link>
        <div className="flex space-x-4">
          <Link to={"/new"}>
            <button className="rounded bg-zinc-100 p-1 hover:bg-orange-400 shadow">
              Add Transaction
            </button>
          </Link>
          {/* <Link to={"/"}>
            <button className="bg-yellow-500">Home</button>
          </Link> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
