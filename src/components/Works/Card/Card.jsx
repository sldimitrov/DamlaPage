import { useEffect } from "react";
import GoToLink from "./GoToLink";

export default function Card({ img, title, subtitle, description, path }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div class="card" id="card1">
      <img src={img} class="card-img-top" alt="front of the book" />
      <div class="card-body">
        <h2 class="card-title" className="text-center" id="work-title">
          {title}
        </h2>
        <h3 class="card-title" className="text-center" id="subtitle">
          ,,{subtitle}"
        </h3>
        <p class="card-text p-3 m-1 mt-3 font-medium text-lg bg-slate-100 rounded-md">
          &ensp;{description}
        </p>
        <GoToLink path={path} text="ПРОЧЕТИ МЕ" />
      </div>
    </div>
  );
}
