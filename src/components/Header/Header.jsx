export default function Header() {
  return (
    <nav className="h-20 flex justify-evenly bg-blue-700">
      <div className="flex w-80 justify-evenly">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
          id="logoImg"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
        <h1
          className="h-10 text-md mt-4 text-center md-mt-5 text-3xl font-bold text-white"
          id="damla-page"
        >
          Damla's Page
        </h1>
      </div>

      <ul className="w-80 h-10 mt-8 flex justify-around">
        <li>
          <a href="/">Начало</a>
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
