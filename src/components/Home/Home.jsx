import GoToLink from "../Works/Card/GoToLink";
import Card from "../Works/Card";
import coffeeImg from "../../pictures/collection/coffee.jpg";
import selfPhoto from "../../pictures/self/profile.jpg";
import Intro from "./Intro";

export default function Home() {
  return (
    <>
      <div id="home" className="container">
        <Intro />
        <hr className="md:hidden h-3 mt-3" />
        <section id="works-info">
          <h3 className="text-2xl md:text-3xl text-center md:mt-7">
            Последна публикация
          </h3>

          <div className="card-container w-full flex justify-center mt-3">
            <Card
              path={"/coffee"}
              img={coffeeImg}
              title={"Разказ"}
              subtitle={"5 минути за кафе"}
              description="Час на смъртта- 11:11. Най-големият ми кошмар се сбъдна…"
            />
          </div>
        </section>
        <hr className="h-1md:hidden mt-3" />
        <section id="works-info">
          <h3
            id="sub-title"
            className="text-2xl mt-3 md:mt-5 md:text-3xl text-center"
          >
            Организирайте среща с писател
          </h3>
          <p className="text-xl mt-1 md:text-xl text-center md:mt-7">
            Ако желаете да организирате среща на Дамла Кемик с Вашите ученици
            изпратете мейл с&ensp;
            <a
              className="text-gray-300 font-serif hover:text-blue-500 underline"
              href="forme"
            >
              контактната ни форма
            </a>
            .
          </p>
        </section>
        {/* <GoToLink path="/works" text="КЪМ ТВОРБИ" /> */}
      </div>
    </>
  );
}
