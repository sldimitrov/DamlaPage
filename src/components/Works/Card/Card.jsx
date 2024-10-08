import { useEffect } from "react";
import { motion } from "framer-motion";
import GoToLink from "../../../UI/GoToLink";

export default function Card({ img, title, subtitle, description, path }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="card m-2" id="card1">
      <img src={img} className="card-img-top" alt="front of the book" />
      <div className="card-body flex flex-col justify-between">
        <h2 className="card-title text-center" id="work-title">
          {title}
        </h2>
        <h3 className="card-title text-center" id="subtitle">
          <i>,,{subtitle}"</i>
        </h3>
        <p className="card-text p-3 m-1 mt-3 font-medium text-lg bg-slate-100 rounded-md">
          &ensp;{description}
        </p>
        <motion.div
          whileHover={{ scale: 1.1, mass: 300 }}
          className="bg-black rounded-md m-2 pb-1"
        >
          <GoToLink
            path={path}
            text="ПРОЧЕТИ МЕ"
            textClass={"text-2xl text-white"}
          />
        </motion.div>
      </div>
    </div>
  );
}
