import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import { Scene } from 'three';

const scene = new Scene();

const Navbar = () => {

  const location = useLocation();

  useEffect(() => {
    console.log("location : ",location)
  }, [])
// cehck wether the user is logged in or not
  const checkLogin = () => {
    const log = localStorage.getItem("Uflag");
    if (log === "true") {
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("Uflag");
  }

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
      }}
      className="bg-white mobile:px-2  sm:px-4 lg:px-[calc(100vw/20)] sm:py-1 font-sans flex items-center sm:justify-between  z-50"
    >
      <div className="flex items-center mobile:justify-center sm:justify-start w-1/4 mobile:space-2  sm:space-x-4 mobile:space-x-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1683/1683828.png"
          className="px-1 sm:h-12 mobile:h-8"
          alt="logo"
        />
        <Link to="/" className="sm:text-2xl mobile:text-xl font-bold text-red-500">
          CaterBid
        </Link>
      </div>

      <div className="flex items-center m-4 mobile:m-1 gap-x-6 mobile:pr-2 mobile:space-x-2 w-2/3 px-12 mobile:px-8  justify-center">
        <Link to="/howitworks" className={`uppercase font-mont mobile:text-xs sm:text-base ${location.pathname === "/howitworks" && "text-red-500"} hover:text-red-500`}>
          How it Works
        </Link>
        <button className={`uppercase font-mont mobile:text-xs sm:text-base hover:text-red-500 ${location.pathname==="/AboutUs" && "text-red-500"}`}>
          <Link to="/AboutUs">About Us</Link>
        </button>
        {checkLogin()&&<button className={`uppercase font-mont mobile:text-xs sm:text-base hover:text-red-500 ${location.pathname.includes("profileuser") && "text-red-500"}`}>
          <Link to={`/profileuser/${localStorage.getItem("Uname")}`}>Dashboard</Link>
        </button>}
      
      </div>
      {/* {console.log("type",typeof(location))} */}
      {!checkLogin()&&<div className="flex items-center mobile:justify-center sm:justify-end w-1/3 space-x-4 mobile:space-x-2 mobile:ml-2">
        <button className="rounded-md sm:text-base mobile:text-xs px-2 py-1 transition ease-in-out text-white bg-red-500 hover:scale-110 hover:bg-phorange hover:text-black duration-150 ">
          <Link to="/login">Login</Link>
        </button>
        <button className="font-semibold sm:text-base mobile:text-xs rounded-md sm:px-2 sm:py-1 mobile:px-0 transition ease-in-out text-red-500 hover:scale-110 duration-150">
          <Link to="/UserSignUpMain">Sign Up</Link>
        </button>
      </div>}
      {checkLogin()&&<div className="flex items-center mobile:justify-center sm:justify-end w-1/3 space-x-4 mobile:space-x-2 mobile:ml-2">
        <button className="rounded-md sm:text-base mobile:text-xs px-2 py-1 transition ease-in-out text-white bg-red-500 hover:scale-110 hover:bg-phorange hover:text-black duration-150 "
        onClick={logout}>
          <Link to="/">Logout</Link>
          {/* {console.log("type",typeof(location))} */}
        </button>
        </div>
      }
    </nav>
  );
};

export default Navbar;
