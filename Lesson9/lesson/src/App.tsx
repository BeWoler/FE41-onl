import React from "react";
import "./App.css";
import Header from "./components/Header";
import RefClass, { RefHook } from "./Examples/RefFC";

function App() {
  return (
    <div className='App'>
      <Header />
      <RefClass />
      <RefHook />
    </div>
  );
}

export default App;
