import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
};

export default App;
