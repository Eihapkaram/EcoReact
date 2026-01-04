import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import NavBar from "/src/components/NavBar";
import "./App.css";
import Cart from "./Veiwes/Cart";
import Home from "./Veiwes/HomePage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
