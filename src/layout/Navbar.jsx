import logo from "../assets/logo.webp";
import Searchbar from "../componets/Searchbar";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Login from "../pages/Login";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <nav className="bg-white border-gray-200 border-b ">
        <div className="max-w-screen flex items-center justify-between gap-5 mx-2 p-2">
          <Link to="/" className="w-30 hidden md:block">
            <img src={logo} alt="logo" />
          </Link>
          <div className="flex flex-col">
            <p className="text-xl font-medium">Delivery in 8 minutes</p>
            <p>Location</p>
          </div>
          <div className="w-[60%] hidden md:block">
            <Searchbar />
          </div>

          {isLoggedIn ? (
            <>
              {/* Account Dropdown */}
              <div className="relative">
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="text-xl font-medium">
                  Account
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2">
                    <Link to="/orders" className="block px-4 py-2 hover:bg-gray-100">
                      My Orders
                    </Link>
                    <Link to="/saved" className="block px-4 py-2 hover:bg-gray-100">
                      Saved Data
                    </Link>
                    <Link to="/egift" className="block px-4 py-2 hover:bg-gray-100">
                      E-Gift
                    </Link>
                    <button onClick={handleLogout} className="block px-4 py-2 text-red-600 hover:bg-gray-100 w-full text-left">
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <Login setUserLoggedIn={setIsLoggedIn} />
          )}

          <button className="px-4 py-3 bg-green-700 rounded text-white font-medium flex justify-between items-center gap-2">
            <IoCartOutline size={20} />
            Add Cart
          </button>

          <div className="md:hidden">
            <CgProfile size={20} onClick={() => setIsOpen(!isOpen)} />
          </div>
          {isOpen && (
            <div className="absolute top-18 left-0 px-2 w-full bg-white">
              <Searchbar />
              <div className="flex justify-between items-center gap-5 mt-3">
                {isLoggedIn ? (
                  <button onClick={handleLogout} className="px-4 py-3 bg-red-500 rounded text-white font-medium">
                    Logout
                  </button>
                ) : (
                  <Login setUserLoggedIn={setIsLoggedIn} />
                )}
                <button className="px-4 py-3 bg-green-700 rounded text-white font-medium flex justify-between items-center gap-2">
                  <IoCartOutline size={20} />
                  Add Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
