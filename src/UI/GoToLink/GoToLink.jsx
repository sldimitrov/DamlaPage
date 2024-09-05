import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GoToLink({
  path,
  text = "",
  className,
  textClass,
  ...props
}) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, mass: 150, duration: 0.6 }}
      className="w-full"
    >
      <Link
        to={path}
        id="goToBtn"
        {...props}
        className={`nav-buttons flex justify-center w-full mt-2 ${className}`}
      >
        <p className={`nav-buttons text-black text-center ${textClass}`}>
          {text}
        </p>
      </Link>
    </motion.span>
  );
}
