import React from "react";
import logo from "../assets/images/logo UB.png";
import COLORS from "../constants/Colors";

const Header = () => {
  return (
    <div className="h-24 lg:h-20 sm:h-16 w-full sm:w-full md:w-full px-6 lg:px-5 sm:px-4 bg-customOrange  flex items-center justify-between ">
      <div className="flex justify-between gap-10 px-20 items-center">
        <img
          className=" w-28 h-20 drop-shadow-md hover:drop-shadow-xl"
          src={logo}
          style={{
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
          }}
          alt="website-logo"
        />
        <h1 class="text-2xl text-white font-semibold font-poppins decoration-wavy tracking-wide">
          URBAN PANTRY
        </h1>
      </div>
      <div className="flex">
        <ul className="list-none flex items-center gap-16 font-poppins font-bold text-lg ">
          <li>Home</li>
          <li>Cart</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <button
              className="px-6 py-2 rounded-lg shadow-md shadow-neutral-900 mr-16 "
              style={{ backgroundColor: COLORS.darkOrange, color: "white" }}
            >
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
