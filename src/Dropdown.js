import React, { useState } from "react";
import Dropdownitems from "./Dropdownitems";
import PropTypes from "prop-types";

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState("");

  const toggle = () => setOpen(!open);

  return (
    <div className="dropdown-wrapper open">
      <button className="btn" onClick={toggle}>
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

Dropdownitems.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  items: PropTypes.array,
};
