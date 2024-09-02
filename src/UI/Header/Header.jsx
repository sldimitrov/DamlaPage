import React from "react";
import NavTab from "./NavTab";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  return (
    <nav id="header">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-angle-double-down" id="dropdown-icon"></i>
      </label>
      <label
        id="damla-page"
        className="logo text-md  text-center text-3xl font-bold text-white"
      >
        <a href="/" className="text-white">
          Damla's Page
        </a>
      </label>
      <ul id="header-ul">
        <NavTab path={""} text={"Начало"} />
        <NavTab path={"forme"} text={"За мен"} />
        <NavTab path={"works"} text={"Творби"} />
        <NavTab path={"achievements"} text={"Постижения"} />
        <NavTab path={"opinions"} text={"Отзиви"} />
      </ul>
    </nav>
  );
}
