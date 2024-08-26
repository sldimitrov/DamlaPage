import SectionTemplate from "../../UI/SectionTemplate";
import almanahImg from "../../pictures/collection/almanah.jpg";
import anthologyImg from "../../pictures/collection/anthology.jpg";
import anthologyBlueImg from "../../pictures/collection/anthologyBlue.jpg";
import eyeOpeningImg from "../../pictures/collection/eyeWork.jpg";
import mathImg from "../../pictures/collection/math.webp";
import coffeeImg from "../../pictures/collection/coffee.jpg";
import Card from "./Card";
import useScroll from "../../hooks/useScroll";
import Border from "../../UI/Border/Border";

export default function Works() {
  useScroll();

  return (
    <Border>
      <SectionTemplate title={"Творби"} subtitle="Издадени сборници">
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
            description='Грабва 1-во място в Националния конкурс, посветен на Янаки Петров. Английската версия е отличена с 3-та награда в Националния конкурс "Този безкраен свят".'
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
        </section>
      </SectionTemplate>
    </Border>
  );
}
