export default function Header() {
  return (
    <nav className="h-20 flex justify-evenly bg-blue-600">
      <h1 className="h-10 text-center mt-5 text-3xl font-bold underline text-white">
        Damla's Page
      </h1>
      <ul className="w-80 h-10 mt-8 flex justify-around">
        <li className="color:">
          <a href="#porfolio">Портфолио</a>
        </li>
        <li>
          <a href="#porfolio">Умения</a>
        </li>
        <li>
          <a href="#porfolio">Творби</a>
        </li>
      </ul>
    </nav>
  );
}
