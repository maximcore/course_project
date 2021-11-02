import React from "react";

import Header from "./components/Header";
import About from "./components/About";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

function App() {
  const title = "Maxim Blog";
  return (
    <div className="container">
      <Header title={title} />
      <About />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
