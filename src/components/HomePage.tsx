import React from "react";
import ReactDOM from "react-dom";

import { Link } from "react-router-dom";

import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";
import Posts from "./Posts";

const HomePage = () => {
  const title = "Maxim Blog";
  return (
    <div className="container">
      <Header title={title} />
      <NavBar />
      <About />
      <Posts />
      <Footer />
    </div>
  );
};

export default HomePage;
