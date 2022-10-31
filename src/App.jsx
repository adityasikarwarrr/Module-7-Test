import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  const [item, setItem] = useState(0);
  function handleCartItem() {
    setItem(item + 1);
  }
  return (
    <div className="App">
      <Header cartItem={item} />
      <Banner />
      <Product handleItem={handleCartItem} />
      <Footer />
    </div>
  );
}

export default App;
