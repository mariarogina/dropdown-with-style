import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";

export default function DropdownItems({ items, selection, setSelection }) {
  return (
    <ul
      style={{
        paddingLeft: "0",
        position: "absolute",
      }}
      className="dropdown"
    >
      {items.map((item) => {
        const active = selection === item;
        const clazz = active ? "active" : "";
        return (
          <li
            key={uuid()}
            className={`${clazz}`}
            onClick={() => setSelection(item)}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
}

DropdownItems.propTypes = {
  items: PropTypes.array,
  setSelection: PropTypes.func,
  selection: PropTypes.string
};

DropdownItems.defaultProps = {
  items: [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ],
  selection: "",
  setSelection: () => {}
};
