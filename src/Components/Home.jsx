import React from "react";
import SideNav from "./templetes/SideNav";
import TopNav from "./templetes/TopNav";

const Home = () => {
  document.title = "Moviex-App | Homepage";
  return (
    <>
      <SideNav />
      <div className="w-[80%] h-full">
        <TopNav></TopNav>
      </div>
    </>
  );
};

export default Home;
