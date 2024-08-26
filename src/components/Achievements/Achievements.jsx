import Button from "../../UI/Button";
import Paragraph from "../../UI/Paragraph/Paragraph";
import SectionTemplate from "../../UI/SectionTemplate";
import useScroll from "../../hooks/useScroll";
import { useState } from "react";
import Awards from "./Awards";
import award from "../../pictures/awards/gold.jpg";
import Block from "../../UI/Block";

export default function Achievements() {
  const [isShowed, setIsShowed] = useState();
  const pClasses = "text-black text-xl font-sans pt-3";
  useScroll();

  function handleClick() {
    setIsShowed(!isShowed);
  }

  return (
    <>
      <SectionTemplate
        title={"Постижения"}
        subtitle="Научи малко за моите изяви!"
      >
        <section className="flex flex-col items-center h-full section-title">
          <div className="achievements h-full mt-3">
            <div className="lg:flex sm:gap-5">
              <div>
                <Block>
                  <Paragraph
                    text={`Световен конкурс "Малък Зограф"- 28 място от 7000
            Тържественана церемония се проведе в Художествената галерия в град
            Казанлък. Тя се състезава с над 7000 художници от 60 различни
            държави. Отличени са само 130, а Дамла е на почетното 28-мо място.`}
                  />
                </Block>
                <Block>
                  <Paragraph
                    text='Международен литературен конкурс "Изящното перо"- 1 място
            Официалната церемония по връчването на наградите на българските
            автори по цял свят бе в столицата на България- София. Конкурсът бе
            предназначен за писатели над 20 години, а тя бе едва на 14, когато й
            връчиха 1-вата награда в раздел поезия.'
                  />
                </Block>

                <Block>
                  <Paragraph
                    text='Общински литературен конкурс за стих или писмо до любим човек по
            повод 14 февруари "Любовта е сляпа, гледа не с очите- а с душата"- 3
            място Писмото бе отличено с 3 място сред над 150 участници, а
            конкуренцията беше изключително силна, защото повечето участници
            бяха студенти. Награждаването се проведе в Бургаски свободен
            университет.'
                  />
                </Block>
                <Block>
                  <Paragraph
                    text='Национален конкурс по изобразително и приложно изкуство "Магията на
            изкуството"- 1 място Журито прегледа повече от 300 работи на деца от
            60 училища от цяла България. Дамла грабна 1 място с обемни кукли,
            изработени по случай 1 март- Ден на любителското творчество и Баба
            Марта.'
                  />
                </Block>
              </div>
              <img
                className=" mt-3 w-96 mx-auto rounded-3xl"
                src={award}
                alt="all postaments of the author"
              />
            </div>
            <Block>
              <Paragraph
                text='Втори национален творчески онлайн конкурс "С обич за мама"- 1 място
            Над 300 участници разкриха таланта си в категориите рисунка и
            литература от 52 населени места на страната. Дамла е наградена от
            журито с 1 място, раздел литература- писмо.'
              />
            </Block>

            <Block>
              <Paragraph
                text="НАЦИОНАЛЕН КОНКУРС ЗА ЛИТЕРАТУРА „ЯНАКИ ПЕТРОВ“ ГР. СРЕДЕЦ- 1 място
            Конкурс, предназначен за автори над 20 години. Над 300 автори от
            цялата страна, като номинираните са само 20. Дамла е на 1-во място в
            раздел проза с къс разказ."
              />
            </Block>

            <p className={pClasses}></p>
          </div>
          {!isShowed ? (
            <Button
              text={"Виж всички постижения"}
              className={"bg-cyan-400 hover:bg-cyan-600 text-white"}
              onClick={() => {
                handleClick();
              }}
            />
          ) : (
            <Button
              text={"Скрий всички постижения"}
              className={"bg-cyan-400 hover:bg-cyan-600 text-white"}
              onClick={() => {
                handleClick();
              }}
            />
          )}
          {isShowed && <Awards />}
        </section>
      </SectionTemplate>
    </>
  );
}
