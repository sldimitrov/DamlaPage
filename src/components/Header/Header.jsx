import React, { useEffect, useState } from "react";

export default function Header() {
  const [stickyClass, setStickyClass] = useState("");

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
    <nav id="header">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i class="fas fa-angle-double-down" id="dropdown-icon"></i>
      </label>
      <label
        id="damla-page"
        className="logo text-md  text-center text-3xl font-bold text-white"
      >
        <a href="/"></a>Damla's Page
      </label>
      <ul id="header-ul">
        <li>
          <a className="header-a active" href="/">
            Начало
          </a>
        </li>
        <li>
          <a className="header-a" href="/forme">
            За мен
          </a>
        </li>
        <li>
          <a className="header-a" href="/works">
            Творби
          </a>
        </li>
        <li>
          <a className="header-a" href="/achievements">
            Постижения
          </a>
        </li>
        <li>
          <a className="header-a" href="/opinions">
            Мнения
          </a>
        </li>
      </ul>
    </nav>
  );
}
