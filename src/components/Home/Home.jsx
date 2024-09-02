import Card from "../Works/Card";
import Intro from "./Intro";
import { motion, useScroll, useTransform } from "framer-motion";
import coffeeImg from "../../pictures/collection/coffee.jpg";

export default function Home() {
  const { scrollY } = useScroll();

  const scaleText = useTransform(scrollY, [0, 100, 170], [1.2, 1.1, 0.9]);

  return (
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
          <motion.span whileHover={{ scale: 1.2, mass: 300 }}>
            <a
              className="text-gray-300 font-serif hover:text-purple-400 underline"
              href="contactform"
            >
              контактната ни форма
            </a>
          </motion.span>
          .
        </p>
      </section>
    </div>
  );
}
