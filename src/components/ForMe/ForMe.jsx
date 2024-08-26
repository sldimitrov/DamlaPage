import useScroll from "../../hooks/useScroll";
import SectionTemplate from "../../UI/SectionTemplate";
import GoToLink from "../../UI/GoToLink";
import LightBox from "../../UI/LightBox";
import { slides } from "./data";
import myBook from "../../pictures/self/MeAlmanah.jpg";
import Border from "../../UI/Border/Border";

export default function ForMe() {
  useScroll();

  return (
    <Border>
      <SectionTemplate title={"За автора"}>
        <div id="forMePage" className="section-title">
          <p
            id="damlaDscr"
            className="text-black text-center text-xl md:text-2xl mt-4 md:p-2"
          >
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
          <LightBox text={"Отвори галерия"} slides={slides} self={myBook} />

          <GoToLink
            textClass={"text-center text-3xl text-white font-serif"}
            className="mt-3 w-36  bg-zinc-700 hover:bg-current  md:w-72 p-1 rounded-md mx-auto"
            path="/achievements"
            text="Разгледай постиженията"
          />
        </div>
      </SectionTemplate>
    </Border>
  );
}
