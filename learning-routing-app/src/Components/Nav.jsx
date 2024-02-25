import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="m-10 flex justify-end gap-20 text-xl ">

      <NavLink
        style={(event) => {
          return {
            color: event.isActive ? "tomato" : "",
            fontWeight: event.isActive ? "bold" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>

      <NavLink
        className={(event) => {
          return [
            event.isActive ? "text-red-400" : "",
            event.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/user"
      >
        User
      </NavLink>

      <NavLink to="/about">
        {(event) => {
          return (
            <span
              className={[
                event.isActive ? "text-red-400" : "",
                event.isActive ? "font-bold" : ""].join(" ")
              }
            >
              About
            </span>
          );
        }}
      </NavLink>

    </div>
  );
};

export default Nav;
