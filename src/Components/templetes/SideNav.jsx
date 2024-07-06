import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-300 p-3">
      <h1 className="text-white font-bold">
        <i className=" text-xl ri-tv-fill text-[#7f7fe4] mr-2"></i>
        <span>MOVIEX</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 gap-3">
        <h1 className="font-semibold mt-4">New Feeds</h1>
        <Link className="hover:bg-[#6556CD] hover:text-red-200 duration-300 rounded-lg px-4 py-2">
          <i className="ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-red-200 duration-300 rounded-lg px-4 py-2">
          <i className="ri-bard-fill mr-1"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-red-200 duration-300 rounded-lg px-4 py-2">
          <i className="ri-clapperboard-fill mr-1"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-red-200 duration-300 rounded-lg px-4 py-2">
          <i className="ri-tv-2-fill mr-1"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-red-200 duration-300 rounded-lg px-4 py-2">
          <i className="ri-team-fill mr-1"></i> People
        </Link>
      </nav>
      {/* ------------------------------------------------------------------------------------------------------------------------- */}
      <hr className="h-[1px] mt-1 bg-zinc-300 border-none" />
      <nav className="flex flex-col text-zinc-400 gap-3">
        <h1 className="font-semibold mt-4">Website Info.</h1>
        <Link className="hover:bg-[#6556CD] hover:text-red-200 duration-300 rounded-lg px-4 py-2">
          <i className="ri-information-fill mr-1"></i> About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-red-200 duration-300 rounded-lg px-4 py-2">
          <i className="ri-phone-fill mr-1"></i> Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
