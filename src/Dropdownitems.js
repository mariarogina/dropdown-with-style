import React from "react";
import uuid from "react-uuid";
import PropTypes from "prop-types";

export default function Dropdownitems({ items, selection, setSelection }) {
  return (
    <ul style={{ paddingLeft: "0", position: "absolute" }} className="dropdown">
      {items.map((item) => {
        function handleOnClick() {
          setSelection(item);
        }

        const active = selection === item;
        const clazz = active ? "active" : "";

        return (
          <li key={uuid()} className={`${clazz}`} onClick={handleOnClick}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}

Dropdownitems.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  items: PropTypes.array,
  setSelection: PropTypes.func,
  selection: PropTypes.string,
};
