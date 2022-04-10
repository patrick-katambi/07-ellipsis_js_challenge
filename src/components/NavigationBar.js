import React, { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function NavigationBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 1024) {
      setMobileMenu(false);
    } else {
      setMobileMenu(true);
    }
  }, []);

  window.addEventListener(
    "resize",
    function (event) {
      const width = event.currentTarget.innerWidth;
      if (width >= 1024) {
        setMobileMenu(false);
      } else {
        setMobileMenu(true);
      }
    },
    true
  );
  return (
    <div className=" w-full h-[80px] relative px-[10%] flex items-center justify-between bg-[#161C23] ">
      <Logo />
      {mobileMenu ? (
        <>
          <div
            className="font-bold cursor-pointer "
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? "Close Menu": "Menu"}
          </div>
          {openMenu ? (
            <div className=" py-10 px-5 w-[70%] bg-[#161C23] absolute top-[100px] right-[10vw] z-50 flex flex-col rounded-xl ">
              <MenuLinksSection />
            </div>
          ) : (
            ""
          )}
        </>
      ) : (
        <>
          <MenuLinksSection />
          <ActionButtons />
        </>
      )}
    </div>
  );
}

export default NavigationBar;

function ActionButtons() {
  return (
    <div className=" flex items-center ">
      <div className="cursor-pointer p-5 ">Login</div>
      <div className=" bg-[#238436] text-[white] cursor-pointer ml-5 px-4 py-3 rounded-xl ">
        Start your free trial
      </div>
    </div>
  );
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
    <nav className=" flex items-center laptopSmall:flex-row flex-col ">
      {navItems.map((navItem, index) => {
        return <NavItem path={navItem.path} label={navItem.label} />;
      })}
    </nav>
  );
}

function NavItem(props) {
  return (
    <ul className=" mx-5 font-bold tracking-widest my-5 ">
      <NavLink
        to={props.path}
        style={({ isActive }) => {
          return {
            padding: "20px",
            fontSize: isActive ? "20px" : "15px",
            color: isActive ? "white" : "grey",
            transition: "0.3s",
          };
        }}
      >
        {props.label}
      </NavLink>
    </ul>
  );
}
