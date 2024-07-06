import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TopNav = () => {
  const [query, setquery] = useState("");

  const GetSearchs = async () => {
    try {
      const d =
        await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=bea19eedb0e9d4ee700cbefa6325c29f&query=${query}
      `);
      console.log(d);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    GetSearchs();
  }, [query]);

  // console.log(query);

  return (
    <div className="w-full h-[10vh]  relative flex justify-center items-center">
      <i className=" text-zinc-400 text-xl ri-search-2-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="w-[50%] mx-4 p-2 outline-none bg-transparent text-zinc-400 border-none"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="  text-zinc-400 text-xl ri-close-fill"
        ></i>
      )}
      <div className="bg-zinc-200 w-[50%] max-h-[50vh] absolute top-[90%] overflow-auto rounded ">
        {/* <Link className="p-5 flex justify-start items-center w-full border-b-2 border-zinc-100 text-zinc-600 font-semibold hover:text-black hover:bg-zinc-300 duration-300">
          <img src="" alt="" />
          <span>hello everyone</span>
        </Link> */}
      </div>
    </div>
  );
};

export default TopNav;
