import { Link } from "react-router-dom";

export default function GoToLink({ path, text }) {
  return (
    <Link
      to={path}
      id="goToBtn"
      className="flex justify-center font-semibold w-full mt-2 bg-blue-500 rounded-md p-2"
    >
      {text}
    </Link>
  );
}
