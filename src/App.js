import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Series from "./pages/series/index";
import Movies from "./pages/movies/index";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" bg-[#0D1116] text-[white] laptopLarge:text-[20px] text-[15px] h-screen w-screen desktop:w-[50%] desktop:mx-[auto] overflow-x-hidden ">
      <NavigationBar />
      <div className="h-[calc(100% - 80px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="series" element={<Series />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<p>404 error</p>} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
