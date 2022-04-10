import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className=" w-screen h-[80px] px-[10%] flex items-center justify-between bg-[#161C23] ">
      <Logo />
      <MenuLinksSection />
      <ActionButtons />
    </div>
  );
}

export default NavigationBar;

function ActionButtons() {
    return <div className=" flex items-center ">
        <div className="cursor-pointer p-5 ">Login</div>
        <div className=" bg-[#238436] text-[white] cursor-pointer ml-5 px-4 py-3 rounded-xl " >Start your free trial</div>
    </div>
}

function Logo() {
  const logoNameFirstPart = "Demo";
  const logoNameSecondPart = "Streaming";
  return (
    <div>
      <p className=" font-bold ">
        {logoNameFirstPart}
        <span className=" font-thin ">{logoNameSecondPart}</span>
      </p>
    </div>
  );
}

function MenuLinksSection(props) {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/movies", label: "Movies" },
    { path: "/series", label: "Series" },
  ];
  return (
    <nav className=" flex items-center ">
      {navItems.map((navItem, index) => {
        return <NavItem path={navItem.path} label={navItem.label} />;
      })}
    </nav>
  );
}

function NavItem(props) {
  return (
    <ul className=" mx-5 font-bold tracking-widest ">
      <NavLink
        to={props.path}
        style={({ isActive }) => {
          return {
              padding: '20px',
            fontSize: isActive ? "20px" : "15px",
            color: isActive ? "white" : "grey",
            transition: '0.3s'
          };
        }}
      >
        {props.label}
      </NavLink>
    </ul>
  );
}
