export default function Footer() {
  const customStyle = {
    width: `28px`,
    height: `28px`, // Similarly, set the height dynamically
  };

  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left ">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h3 className="text-uppercase mb-4 font-weight-bold text-warning">
              Damla's Page
            </h3>
            <p>
              Родена на 2 април 2005 година, в град Айтос. От ранна детска
              възраст проявява интерес към изкуството. Лауреат на различни
              конкурси в България и по целия свят в сферата на литературата и
              изкуството.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h3 className="text-uppercase mb-4 font-weight-bold text-warning">
              Награди
            </h3>
            <p>
              <a href="#" className="text-white">
                „Янаки Петров“
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                „Изящното перо“
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                „Георги Тодоров“
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                „Млад разказвач“
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                „Иван Бързаков“
              </a>
            </p>
            <p>
              <a href="#" className="text-gray-400">
                и още много други
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Полезни линкове
            </h5>
            <p>
              <a href="#" className="text-white">
                Профил
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                Присъедини се
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                Писателска дейност
              </a>
            </p>
            <p>
              <a href="#" className="text-white">
                Помощ
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 mb-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Contact
            </h5>
            <p>
              <i className="fas fa-home mr-3">Chernograd, Bourgas, 23, BG</i>
            </p>
            <p>
              <i className="fas fa-envelope mr-3">damla.s.k@abv.bg</i>
            </p>
            <p>
              <i className="fas fa-phone mr-3">+359 88 6478698</i>
            </p>
          </div>
        </div>
        <hr className="mb-4 mt-3" />
        <div className=" flex justify-around">
          <div className="w-64">
            <p>
              Copyright 2020 All rights reserved by:
              <a href="#">
                <strong className="text-warning">Slavi Dimitrov</strong>
              </a>
            </p>
          </div>
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white">
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white">
                    <i className="fab fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
