import React, { useEffect, useState } from "react";
import GoToLink from "../../UI/GoToLink/GoToLink";

export default function Header() {
  const [stickyClass, setStickyClass] = useState("");
  const [isPage, setIsPage] = useState("start");

  const handleClickMenu = ({ page }) => {
    console.log(page);
    setIsPage(page);
  };

  const stickNavbar = () => {
    const windowHeight = window.scrollY;
    setStickyClass(windowHeight > 500 ? "sticky-nav" : "");
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <nav id={`header ${stickyClass}`}>
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
        <li>
          <a
            className={`header ${isPage === "start" && "active"}`}
            href="/"
            onClick={() => {
              handleClickMenu("start");
            }}
          >
            Начало
          </a>
        </li>
        <li>
          <a
            className={`header-a ${isPage === "forme" && "active"}`}
            href="/forme"
            onClick={() => {
              handleClickMenu("forme");
            }}
          >
            За мен
          </a>
        </li>
        <li>
          <a
            className={`header-a ${isPage === "works" && "active"}`}
            href="/works"
            onClick={() => {
              handleClickMenu("works");
            }}
          >
            Творби
          </a>
        </li>
        <li>
          <a
            className={`header-a ${isPage === "achievements" && "active"}`}
            href="/achievements"
            onClick={() => {
              handleClickMenu("achievements");
            }}
          >
            Постижения
          </a>
        </li>
        <li>
          <a
            className={`header-a ${isPage === "opinions" && "active"}`}
            href="/opinions"
            onClick={() => {
              handleClickMenu("opinions");
            }}
          >
            Отзиви
          </a>
        </li>
      </ul>
    </nav>
  );
}
