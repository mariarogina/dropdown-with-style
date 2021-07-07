import React, { useState } from "react";
import Dropdownitems from "./Dropdownitems";

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("");

  const toggle = () => setOpen(!open);

  return (
    <div className="dropdown-wrapper open" >
      
        <button
          className="btn"
          onClick={toggle}
          
        >
         <span>Account Settings</span>
        <i className="material-icons">public</i>
        </button>

        {open && (
          <Dropdownitems
            items={items}
            selection={selection}
            setSelection={setSelection}
          />
        )}
      </div>
    
  );
}

export default Dropdown;
