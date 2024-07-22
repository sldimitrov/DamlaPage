import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTemplate from "../SectionTemplate";
import almanahImg from "../../../pictures/almanah.jpg";
import anthologyImg from "../../../pictures/anthology.jpg";
import anthologyBlueImg from "../../../pictures/anthologyBlue.jpg";
import Card from "./Card";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  return (
    <SectionTemplate>
      <div className="flex justify-center">
        <header className="flex items-center flex-col">
          <h2 className="text-black text-lg mt-3" id="works">
            Творби
          </h2>
          <h2 className="text-black text-lg mt-3" id="works">
            Издадени сборници
          </h2>
        </header>
      </div>
      <section className="flex w-full justify-between mt-5">
        <Card
          path={"/almanah"}
          img={almanahImg}
          title={"АЛМАНАХ"}
          description='Вътре се помещава разказът ми ,,Обещавам". Той идва заедно с
            наградата ми на първи национален конкурс ,,Янаки Петров"'
        />
        <Card
          path={"/Myfather"}
          img={anthologyImg}
          title={"АНТОЛОГИЯ 2023"}
          description='Вътре се помещава разказът ми ,,Обещавам". Той идва заедно с
            наградата ми на първи национален конкурс ,,Янаки Петров"'
        />
        <Card
          path={"/democracy"}
          img={anthologyBlueImg}
          title={"АНТОЛОГИЯ 2024"}
          description='Вътре се помещава разказът ми ,,Обещавам". Той идва заедно с
            наградата ми на първи национален конкурс ,,Янаки Петров"'
        />
      </section>
    </SectionTemplate>
  );
}
