import { Link } from "react-router-dom";

export default function Card({ img, title, subtitle, description, path }) {
  return (
    <div class="card" id="card1">
      <img src={img} class="card-img-top" alt="almanah book" />
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
        <Link
          to={path}
          id="link"
          className="flex justify-center font-semibold w-full mt-2 bg-blue-400 rounded-md p-2"
        >
          ПРОЧЕТИ МЕ
        </Link>
      </div>
    </div>
  );
}
