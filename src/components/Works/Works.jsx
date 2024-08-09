import SectionTemplate from "../Home/SectionTemplate";
import almanahImg from "../../pictures/collection/almanah.jpg";
import anthologyImg from "../../pictures/collection/anthology.jpg";
import anthologyBlueImg from "../../pictures/collection/anthologyBlue.jpg";
import eyeOpeningImg from "../../pictures/collection/eyeWork.jpg";
import mathImg from "../../pictures/collection/math.webp";
import coffeeImg from "../../pictures/collection/coffee.jpg";
import Card from "./Card";
import useScroll from "../../hooks/useScroll";

export default function Works() {
  useScroll();

  return (
    <SectionTemplate>
      <div className="flex justify-center">
        <header className="flex items-center flex-col" id="portfolio">
          <h2 className="text-black text-lg mt-3" id="works-title">
            Творби
          </h2>
          <h2
            className="text-black leading-10 text-lg mt-3 sm:line-height: 1.25;"
            id="works-subtitle"
          >
            Издадени сборници
          </h2>
        </header>
      </div>
      <hr className="bg-black h-0.5 mt-4" />

      <section id="card-section">
        <Card
          path={"/almanah"}
          img={almanahImg}
          title={"АЛМАНАХ"}
          subtitle={"Обещавам"}
          description='Трогателната история за Азиза и Кадир- дъщеря и баща от Афганистан. Съдбите им се променят, когато войната започва и баща й не се връща у дома."'
        />
        <Card
          path={"/Myfather"}
          img={anthologyImg}
          title={"АНТОЛОГИЯ 2023"}
          subtitle={"My father my hope"}
          description='Разказът, който грабна 1-во място в Националния конкурс, посветен на Янаки Петров, през 2023 година, на английски език. Английската версия е отличена с 3-та награда в Националния конкурс "Този безкраен свят"- 2023 година.'
        />
        <Card
          path={"/democracy"}
          img={anthologyBlueImg}
          title={"АНТОЛОГИЯ 2024"}
          subtitle={"Democracy"}
          description='Творбата разказва за палестинско момиче, влюбило се във "врага", за двама млади, които ръка за ръка пресичат улиците на Йерусалим. Въпреки трудностите и жестоката съдба, дали любовта им оцелява?'
        />

        <Card
          path={"/human"}
          img={eyeOpeningImg}
          title={"Разказ"}
          subtitle={"Човек вижда толкова, колкото знае"}
          description='1 място в Национален конкурс "Георги Тодоров"- 2023 година'
        />
        <Card
          path={"/mathlove"}
          img={mathImg}
          title={"Есе"}
          subtitle={
            "В любовната аритметика едно плюс едно е равно на две, а две минус едно е равно на нула"
          }
          description='1 място в Национален конкурс  "Любовта е"- 2024 година'
        />
        <Card
          path={"/coffee"}
          img={coffeeImg}
          title={"Разказ"}
          subtitle={"5 минути за кафе"}
          description="Час на смъртта- 11:11. Най-големият ми кошмар се сбъдна…"
        />
        <h2
          className="text-black leading-10 mx-auto text-lg mt-3 sm:line-height: 1.25;"
          id="works-subtitle"
        >
          Есета и разкази
        </h2>
      </section>
    </SectionTemplate>
  );
}
