import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import User from "../Components/User";
import About from "../Components/About";
import UserDetails from "../Components/UserDetails";

const RouterComp = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/user" element={<User />}>
          <Route path="/user/:name" element={<UserDetails />} />
        </Route>
 
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default RouterComp;
