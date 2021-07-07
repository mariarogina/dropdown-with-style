import React from "react";
import "./App.css"
import Dropdown from "./Dropdown";

const items = ["Profile", "Password", "Pro", "Help", "Logout", "Details"];

function App() {
  return (
    <div className="container" >
     
      <Dropdown  items={items} />
    </div>
  );
}

export default App;
