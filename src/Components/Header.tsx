import React from "react";
import { HiOutlineLink } from "react-icons/hi";
import { BsSearch, BsChatDots } from "react-icons/bs";
import { SlBell } from "react-icons/sl";
import Profile from "../assets/profile.png";

function Header() {
  return (
    <div className="h-[80px] w-full px-8 flex justify-between items-center">
      <div className="flex gap-7 pl-2 items-center">
        <HiOutlineLink className="text-primary" size={30} />
        <div className="relative text-secondary ">
          <input
            type="text"
            className="rounded-[40px] w-[300px] h-10  pl-11 text-sm outline-none bg-bgSecondary   "
            placeholder="Search"
          />
          <BsSearch
            size={16}
            className="absolute left-5 top-[50%] -translate-y-[50%] "
          />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div className="bg-bgSecondary flex items-center justify-center py-[10px] pl-5 pr-6 gap-2 rounded-[40px] cursor-pointer">
          <p className="text-secondary">+</p>
          <p className="text-primary text-sm font-semibold">Create</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-9 h-9 flex items-center justify-center bg-bgSecondary rounded-full cursor-pointer">
            <SlBell className="text-secondary" size={20} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center bg-bgSecondary rounded-full cursor-pointer">
            <BsChatDots className="text-secondary" size={20} />
          </div>
        </div>
        <img src={Profile} className="w-9 h-9 rounded-full" />
      </div>
    </div>
  );
}

export default Header;
