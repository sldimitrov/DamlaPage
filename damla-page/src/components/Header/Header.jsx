import logoImg from "../../pictures/logo.svg";

export default function Header() {
  return (
    <nav className="h-20 flex justify-evenly bg-blue-700">
      <div className="flex w-80 justify-evenly">
        <img src={logoImg} id="logoImg" alt="pencil in a bracklet" />
        <h1
          className="h-10 text-md mt-4 text-center md-mt-5 text-3xl font-bold text-white"
          id="damla-page"
        >
          Damla's Page
        </h1>
      </div>

      <ul className="w-80 h-10 mt-8 flex justify-around">
        <li>
          <a href="#start">Начало</a>
        </li>
        <li>
          <a href="#porfolio">Портфолио</a>
        </li>
        <li>
          <a href="#works">Творби</a>
        </li>
        <li>
          <a href="#path">Път</a>
        </li>
      </ul>
    </nav>
  );
}
