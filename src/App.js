import React from "react";
import "./App.css";
import Dropdown from "./Dropdown";

const items = [
  "Profile Information",
  "Change Password",
  "Become PRO",
  "Help",
  "Log Out",
];

function App() {
  return (
    <div className="container">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
