import useScroll from "../../hooks/useScroll";
import SectionTemplate from "../Home/SectionTemplate";
import GoToLink from "../Works/Card/GoToLink";

export default function ForMe() {
  useScroll();

  return (
    <>
      <SectionTemplate>
        <div id="forMePage" className="section-title">
          <h1 className="text-black text-3xl md:text-5xl text-center mt-3">
            За автора
          </h1>
          <hr className="bg-black h-0.5 mt-2" />
          <p className="text-black text-center font-sans text-xl md:text-2xl mt-4 md:p-2">
            Дамла Сезгин Кемик е родена на 2 април, 2005 година, в град Айтос.
            От ранна детска възраст проявява интерес към изкуството. Рисува
            откакто се помни, но няма художествено образование. В 4 клас (ОУ
            „Светлина“- село Тополица) започва и да пише поезия, а в 11 клас (СУ
            „Никола Йонков Вапцаров“- град Айтос) продължава с проза. Тя е
            лауреат на различни конкурси в България и по целия свят в сферата на
            литературата и изкуството. Освен с литературните си постижения Дамла
            набра популярност и със своя макет на Айфеловата кула. Макетът е
            висок 128 см, изработен в рамките на 12 дни от над 1000 дървени
            пръчици и шпатули. Новината е отразена по БНТ, БТВ, Нова ТВ, МОН и
            др.
          </p>
          <GoToLink
            className="mb-3"
            path="/achievements"
            text="Разгледай постиженията"
          />
        </div>
      </SectionTemplate>
    </>
  );
}
