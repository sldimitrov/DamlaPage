export default function Footer() {
  const customStyle = {
    width: `28px`,
    height: `28px`, // Similarly, set the height dynamically
  };

  return (
    <footer className="text-white bg-dark pt-5 pb-4">
      <div className="container text-center text-md-left ">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h3 className="text-uppercase mb-4 font-weight-bold text-warning">
              За мен
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
              <a
                target="_blank"
                href="https://www.burgas.bg/bg/novini/za-parvi-pat-vrachiha-literaturnite-nagradi-na-imeto-na-yanaki-petrov/"
                className="text-white"
              >
                „Янаки Петров“
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.eurochicago.com/2019/11/i-pero-2019/"
                className="text-white"
              >
                „Изящното перо“
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://medianews.bg/bg/a/nagradikha-nay-dobrite-tvorbi-v-konkursa-georgi-todorov-v-mezdra"
                className="text-white"
              >
                „Георги Тодоров“
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.burgas.bg/bg/novini/nagrazhdavat-otlichenite-v-natsionalen-konkurs-za-lyubovna-proza-mlad-razkazvach-na-imeto-na-atanas-radoynov/"
                className="text-white"
              >
                „Млад разказвач“
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.facebook.com/sdprogbarzakov"
                className="text-white"
              >
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
              <a
                target="_blank"
                href="https://damlakemik.blogspot.com/"
                className="text-white"
              >
                Моят Блог
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://www.svetilo.org/"
                className="text-white"
              >
                Клуб Светило
              </a>
            </p>
            <p>
              <a
                target="_blank"
                href="https://otvadkoritsite.wordpress.com/biblioteca/damlakemik/"
                className="text-white"
              >
                Литературен клуб
              </a>
            </p>

            <p>
              <a
                href="https://bpoburgas.org/archives/tag/%D0%B4%D0%B0%D0%BC%D0%BB%D0%B0-%D0%BA%D0%B5%D0%BC%D0%B8%D0%BA"
                className="text-white"
              >
                Писателска общност Бургас
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 mb-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Контакти
            </h5>
            <p>
              <i className="fas fa-home mr-3"> Chernograd, Burgas, BG</i>
            </p>
            <p>
              <i className="fas fa-envelope mr-3"> damla.s.k@abv.bg</i>
            </p>
            <p>
              <i className="fas fa-phone mr-3"> +359 88 6478698</i>
            </p>
          </div>
        </div>
        <hr className="mb-4 mt-3" />
        <div className=" flex justify-around">
          <div className="bottom">
            <div className="w-64">
              <p id="copyright" className="w-64">
                Copyright 2024 All rights reserved by:
                <a
                  id="developer-insta"
                  href="https://www.instagram.com/sldimitrovv_/"
                  target="_blank"
                >
                  <strong className="text-warning"> Slavi Dimitrov</strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className="text-center text-md-right">
                <div className="social-apps flex ml-5 w-24 justify-between">
                  <a
                    target="_blank"
                    href="https://www.facebook.com/profile.php?id=100049866423323"
                    className="btn-floating btn-sm text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                    </svg>
                  </a>

                  <a
                    target="_blank"
                    href="https://www.instagram.com/d_kemik05/"
                    className="btn-floating btn-sm text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
