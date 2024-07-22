import { Link } from "react-router-dom";

export default function Card({ img, title, description, path }) {
  return (
    <div class="card" id="card1">
      <img src={img} class="card-img-top" alt="almanah book" />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>

        <Link
          to={path}
          className="flex justify-center w-28 mt-2 bg-blue-300 rounded-md p-2"
        >
          Прочети ме
        </Link>
      </div>
    </div>
  );
}
