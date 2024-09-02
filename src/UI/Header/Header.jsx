import React from "react";
import NavTab from "./NavTab";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState();

  const handleClickMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <nav id="header">
      <input type="checkbox" id="check" />
      <motion.label
        animate={{ rotate: isMenuClicked ? 0 : 90, duration: 0.4 }}
        exit={{ rotate: 90 }}
        htmlFor="check"
        className="checkbtn"
      >
        <i
          className="fas fa-angle-double-down"
          onClick={handleClickMenu}
          id="dropdown-icon"
        ></i>
      </motion.label>
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
