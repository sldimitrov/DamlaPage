import { useEffect } from "react";
import SectionTemplate from "../Home/SectionTemplate";
import almanahImg from "../../pictures/collection/almanah.jpg";
import anthologyImg from "../../pictures/collection/anthology.jpg";
import anthologyBlueImg from "../../pictures/collection/anthologyBlue.jpg";
import Card from "./Card";

export default function Works() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionTemplate>
      <div className="flex justify-center">
        <header className="flex items-center flex-col" id="portfolio">
          <h2 className="text-black text-lg mt-3" id="works-title">
            Творби
          </h2>
          <h2 className="text-black text-lg mt-3" id="works-subtitle">
            Издадени сборници
          </h2>
        </header>
      </div>
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
      </section>
    </SectionTemplate>
  );
}
