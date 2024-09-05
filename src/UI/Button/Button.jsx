import { makeUseVisualState, motion } from "framer-motion";

export default function Button({ text, className, ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
      className={`rounded-md p-2 text-xl md:text-2xl ${className}`}
      {...props}
    >
      {text}
    </motion.button>
  );
}
