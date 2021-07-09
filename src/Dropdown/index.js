import React, { useState } from "react";
import DropdownItems from "../DropdownItems";
import PropTypes from "prop-types";

function Dropdown({ items }) {
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
        <DropdownItems
          items={items}
          selection={selection}
          setSelection={setSelection}
        />
      )}
    </div>
  );
}

export default Dropdown;

Dropdown.propTypes = {
  items: PropTypes.array,
};

Dropdown.defaultProps = {
  items: [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ],
};
