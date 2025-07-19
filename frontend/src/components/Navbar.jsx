import React, { useContext, useEffect, useState, useRef  } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const {
    setshowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setcartItems,
  } = useContext(ShopContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setcartItems({});
    navigate("/login");
  };
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="outfit-regular flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm  text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <motion.p whileTap={{scale:0.8}}>HOME</motion.p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <motion.p  whileTap={{scale:0.8}}>COLLECTION</motion.p >
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <motion.p  whileTap={{scale:0.8}}>ABOUT</motion.p >
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/contact" className="  flex flex-col items-center gap-1">
          <motion.p  whileTap={{scale:0.8}} >CONTACT</motion.p >
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        
        
        <motion.img
          whileTap={{scale:0.8}}
          onClick={() => setshowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
      
        <div className="relative"  ref={dropdownRef}>
            <motion.img
              whileTap={{ scale: 0.8 }}
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt="Profile"
              onClick={() => {
                if (token) {
                  setShowDropdown((prev) => !prev); // Toggle visibility
                } else {
                  navigate("/login");
                }
              }}
            />
            <AnimatePresence>
            {token && showDropdown && (
              <motion.div
               key="dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
                <p className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100">
                  My Profile
                </p>
                <p
                  onClick={() => {
                    setShowDropdown(false);
                    navigate("/orders");
                  }}
                  className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                >
                  Orders
                </p>
                <p
                  onClick={() => {
                    setShowDropdown(false);
                    logout();
                  }}
                  className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                >
                  Logout
                </p>
              </motion.div>
            )}</AnimatePresence>
          </div>
           

        <Link to="/cart" className="relative">
          <motion.img whileTap={{scale:0.8}} src={assets.cart_icon} className="min-w-5 w-5" alt="" />
          <motion.p
            whileTap={{scale:0.8}}
            className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black
text-white aspect-square rounded-full text- [5px] "
          >
            {" "}
            {getCartCount()}{" "}
          </motion.p>
        </Link>
        <motion.img
          whileTap={{scale:0.8}}
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      {/* Sidebar  menu  for small screen */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 bg-white transition-transform duration-300 ${
    visible ? "translate-x-0" : "translate-x-full"
  }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className=" flex items-center gap-4 p-3 cursor-pointer"
          >
            <motion.img  src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <motion.p  whileTap={{ scale:0.8}}>Back</motion.p>
          </div>
          
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border "
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
