import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="h-20 w-full bg-slate-500 flex items-center justify-between px-5">
        <div className="">
          <h1 className=" font-semibold  text-white text-xl ">
            <span className="text-green-500 text font-semibold ">&#60;</span>{" "}
            Shu
            <span className="text-green-400 text font-semibold ">
              bham &#62;
            </span>
          </h1>
        </div>

        <div className=" font-medium text-lg gap-x-2">
          
          <nav className=" text-white">
            <NavLink className="mr-4" href="/">Home</NavLink>
            <a href="/password">PasswordGenrator</a>
          </nav>
        </div>

        <div className="flex items-center gap-x-2">
          <button className=" py-2 px-2 bg-green-400 rounded-lg text-white font-semibold ">
            Log_In
          </button>
          <button className=" py-2 px-2 bg-green-400 rounded-lg text-white font-semibold ">
            Sjgn_In
          </button>
        </div>
      </div>
    </>
  );
}

