import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-blue-400 flex flex-auto justify-center items-center">
      <div className="flex flex-wrap justify-center space-x-8 -mx-5 -my-2">
        <div className="px-5 py-2">
          <Link
            to="/"
            className="text-base leading-6 text-gray-100 hover:text-zinc-300"
          >
            Home
          </Link>
        </div>
        <div className="flex justify-center mt-2 space-x-6">
          <Link
            to="https://github.com/Alex-de-code/budget-app-backend"
            target="_blank"
          >
            <BsGithub className="text-gray-200 hover:text-purple-300 text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
