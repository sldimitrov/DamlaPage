import { motion } from "framer-motion";

export default function Block({ children }) {
  return (
    <motion.div
      animate={{ scale: [0.5, 0.6, 1], mass: [200, 300, 400] }}
      className="bg-gray-300 shadow-xl rounded-md"
    >
      {children}
    </motion.div>
  );
}
