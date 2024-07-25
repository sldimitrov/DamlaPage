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
    // <nav className="h-20 flex justify-evenly bg-blue-700 relative w-full">
    //   <div className="flex w-80 justify-evenly">

    //     <h1
    //       className="h-10 text-md mt-4 text-center md-mt-5 text-3xl font-bold text-white"
    //       id="damla-page"
    //     >
    //       Damla's Page
    //     </h1>
    //   </div>

    //   <ul className="w-96 h-10 mt-8 flex justify-around">
    //     <li>
    //       <a href="/" className="links">
    //         Начало
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/works" className="links">
    //         Творби
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/achievements" className="links">
    //         Постижения
    //       </a>
    //     </li>
    //     <li>
    //       <a href="/opinions" className="links">
    //         Мнения
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i class="fas fa-angle-double-down"></i>
      </label>
      <label
        id="damla-page"
        className="logo text-md  text-center text-3xl font-bold text-white"
      >
        <a href="/"></a>Damla's Page
      </label>
      <ul id="header-ul">
        <li>
          <a className="active" href="/">
            Начало
          </a>
        </li>
        <li>
          <a href="/works">Творби</a>
        </li>
        <li>
          <a href="/achievements">Постижения</a>
        </li>
        <li>
          <a href="opinions">Мнения</a>
        </li>
      </ul>
    </nav>
  );
}
