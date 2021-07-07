import React from "react";
import { uuid } from "uuidv4";

export default function Dropdownitems({
  items,
  selection,
  setSelection,
  selected,
  handleClick,
}) {
  let clazz;
  return (
    
      <ul style={{ paddingLeft: "0", position: "absolute"  }} className="dropdown">
        {items.map((item) => {
          function handleOnClick() {
            setSelection(item);
          }

          const active = selection === item; const clazz = active ? "active" : "";

          return (
            <li className={`${clazz}`} onClick={handleOnClick}>
             {item}
            </li>
          );
        })}
      </ul>
   
  );
}
