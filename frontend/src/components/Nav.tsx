import { ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import userlog from "../assets/user-interface.png";
import { useCart } from "../context/useCart";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Catalogue from "./../pages/Catalogue";

const Nav = () => {
  const { totalItems } = useCart();

  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [user, setUser] = useState<null | {
    email?: string;
    username?: string;
  }>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [dropdown]);

  // logout logic
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setDropdown(false);
    navigate("/login");
  };

  return (
    <div className="flex justify-between py-8 px-8 items-center">
      <div className="relative flex gap-5">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        {isOpen && (
          <div className="absolute top-16 left-0 w-48 bg-white border rounded-lg shadow-lg p-3 flex flex-col gap-3 z-50">
            <Link
              to="/"
              className="hover:bg-gray-100 px-3 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/catalogue"
              className="hover:bg-gray-100 px-3 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              Catalogue
            </Link>
            <Link
              to="/contact"
              className="hover:bg-gray-100 px-3 py-2 rounded"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/cart"
              className="relative p-3 rounded-full"
              onClick={() => setOpen(false)}
            >
              <ShoppingCart size={22} />

              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        )}
      <Link to="/" className="text-5xl">Shop</Link>
      </div>

      {/* <h1 className="text-5xl">Shop</h1> */}

      {/* User Icon Dropdown */}
      <div className="relative">
        <img
          src={userlog}
          alt="user icon"
          className="h-9 w-9 object-contain cursor-pointer"
          onClick={() => setDropdown(!dropdown)}
        />

        {/* Dropdown Menu */}
        {dropdown && (
          <div className="absolute right-0 mt-2 w-60 bg-white border rounded-lg shadow-lg p-2 flex flex-col gap-2">
            {!user && (
              <>
                <Link
                  to="/login"
                  className="hover:bg-gray-100 px-3 py-2 rounded"
                  onClick={() => setDropdown(false)}
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="hover:bg-gray-100 px-3 py-2 rounded"
                  onClick={() => setDropdown(false)}
                >
                  Signup
                </Link>
              </>
            )}

            {user && (
              <button
                onClick={handleLogout}
                className="text-left hover:bg-gray-100 px-3 py-2 rounded"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
