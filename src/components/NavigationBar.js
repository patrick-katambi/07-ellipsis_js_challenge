import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <div className=" w-full h-[80px] px-[10%] flex items-center justify-between bg-[beige] ">
      <Logo />
      <MenuLinksSection />
      <div>Buttons</div>
    </div>
  );
}

export default NavigationBar;

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
    { path: "/home", label: "Home" },
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
            color: isActive ? "black" : "grey",
            transition: '0.3s'
          };
        }}
      >
        {props.label}
      </NavLink>
    </ul>
  );
}
