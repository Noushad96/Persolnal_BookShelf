import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar_headering gap-10 flex flex-wrap justify-center mb-10">
        <div>
          <Link to="/"> Home</Link>
        </div>
        <div className="BookShelf_btn ">
          <Link
            to="/mybook"
            className="bg-green-600 px-4 py-1 rounded text-white"
          >
            My Bookshelf
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
