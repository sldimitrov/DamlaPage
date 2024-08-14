import { Link } from "react-router-dom";

export default function GoToLink({ path, text = "", className, ...props }) {
  return (
    <Link
      to={path}
      id="goToBtn"
      {...props}
      className={`nav-buttons flex justify-center w-full mt-2 ${className}`}
    >
      <p className="nav-buttons text-black text-center text-2xl">{text}</p>
    </Link>
  );
}
