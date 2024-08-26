import { NavLink } from "react-router-dom";

export default function NavTab({ path, text }) {
  return (
    <li>
      <NavLink
        to={`/${path}`}
        id="link"
        className={({ isActive }) => (isActive ? "active" : "link")}
      >
        {text}
      </NavLink>
    </li>
  );
}
