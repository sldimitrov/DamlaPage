import Paragraph from "../../../UI/Paragraph/Paragraph";
import sertificates from "../../../pictures/awards/sertificates.jpg";
import shipka from "../../../pictures/projects/Shipka.jpg";
import talking from "../../../pictures/self/talking.jpg";
import Layout from "./Layout/Layout";
import { motion } from "framer-motion";

export default function Awards() {
  return (
    <motion.div animate={{ opacity: [0.5, 1], scale: [0.5, 1] }}>
      <h2 className="text-black text-center font-sans text-2xl md:text-3xl mt-3">
        За периода 2023/2024
      </h2>
      <hr className="bg-black w-full md:w-80 h-0.5 mt-2" />
      <Layout
        img={sertificates}
        alt="all sertificates of the author"
        flag={true}
      >
        <Paragraph
          className={"bg-yellow-100 rounded-md pl-2"}
          text='Национален литературен конкурс "Пред виното и любовта всички са покорни"- 2023 година- 1 място'
        />
        <Paragraph
          className={"bg-yellow-200 rounded-md pl-2"}
          text='Конкурс за рисунка "Героите на българската свобода"- 2023 година- 1 място'
        />
        <Paragraph
          className={"bg-yellow-200 rounded-md pl-2"}
          text="Национален конкурс за литература „Янаки Петров“- 2023 година- 1място"
        />
        <Paragraph
          className={"bg-yellow-300 rounded-md pl-2"}
          text='Читалищен конкурс "Георги Тодоров"- 2023 година- 1 място'
        />
        <Paragraph
          className={"bg-yellow-400 rounded-md pl-2"}
          text='Международен фестивал "Българската душа на Святата земя"- 2023 година- 1 място'
        />
        <Paragraph
          className={"bg-yellow-500 rounded-md pl-2"}
          text='Национален ученически конкурс за стихотворение и есе на тема "Любовта е..."- 2024 година- 1 място'
        />
        <Paragraph
          className={"bg-yellow-400 rounded-md pl-2"}
          text='Конкурс "С обич за мама"- 2023 година- 1 място'
        />
        <Paragraph
          className={"bg-yellow-300 rounded-md pl-2"}
          text='Национален литературен конкурс "Млад разказвач"- 2024 година- награда на Черноморска асоциация на жените за най-добър млад участник 
Конкурс „Чудото любов“- 2024 година- 1 място'
        />
        <Paragraph
          className={"bg-yellow-200 rounded-md pl-2"}
          text='Национален конкурс по изобразително и приложно изкуство "Магията на изкуството"- 2023 година- 1 място'
        />
      </Layout>
      <Layout
        img={shipka}
        alt={"author stand up talking to group of people"}
        flag={false}
      >
        <Paragraph
          className="bg-slate-200"
          text='Конкурс за детска рисунка "Съвременният Бай Ганьо:- 2023 година- 2 място'
        />
        <Paragraph
          className="bg-slate-300"
          text='Национален литературен конкурс "Мария Смилова"- 2023 година- 2 място'
        />
        <Paragraph
          className="bg-slate-400"
          text='Международен конкурс "Иван Бързаков"- 2023 година- 2 място'
        />
        <Paragraph
          className="bg-slate-500"
          text="Национална инициатива „Завръщане към корените” и „По обратния път на дедите ни”- 2023 година- 2 място"
        />
        <Paragraph
          className="bg-slate-400"
          text="Литературен конкурс, посветен на личността и делото на Апостола, на тема: „Слово и дело – венецът на един живот“- 2024 година- 2 място"
        />
        <Paragraph
          className="bg-slate-300"
          text="Национален литературен конкурс за създаване на авторски текстове на английски и немски език „Този безкраен свят”- 2024 година- 2 място"
        />{" "}
      </Layout>
      <Layout
        img={talking}
        alt={"the author talking in front of group of people"}
        flag={true}
      >
        <Paragraph
          className="bg-yellow-500"
          text='Ученически конкурс "Ти ни трябваш и днес, Апостоле"- 2023 година- 3 място '
        />
        <Paragraph
          className="bg-yellow-600"
          text='Конкурс "Любовта и виното"- 2023 година- 3 място'
        />
        <Paragraph
          className="bg-yellow-600"
          text='Литературен конкурс за ученици от 9-12 клас и студенти, посветен на 14.02- Ден на влюбените и музикално-поетичната вечер "Любовта е сляпа- гледа не с очите, а с душата"- 2023 година- 3 място'
        />

        <Paragraph
          className="bg-yellow-700"
          text='Национален литературен конкурс "И ти си в мене- ти родино моя"- 2023 година- 3 място'
        />
        <Paragraph
          className="bg-yellow-800"
          text='Ученически конкурс "Моето мнение има значение"- 2023 година- 3 място'
        />
        <Paragraph
          className="bg-yellow-700"
          text='Конкурс "По стъпките на Иван Вазов"- 2023 година- 3 място'
        />
        <Paragraph
          className="bg-yellow-600"
          text='Национален литературен конкурс "Този безкраен свят"- 2023 година- 3 място'
        />
        <Paragraph
          className="bg-yellow-500"
          text='Международен конкурс "Водата- да ускорим промяната"- 2023 година- 3 място'
        />
        <Paragraph
          className="bg-yellow-600"
          text='Онлайн конкурс за ученици "Събитие от живота на Васил Левски, което ме впечатли"- 2024 година- 3 място'
        />
        <Paragraph
          className="bg-yellow-700"
          text="Конкурс “С любов към Франция”- 2024 година- 3 място"
        />
        <Paragraph
          className="bg-yellow-800"
          text='Национален конкурс за млади художници и литератори " Да опазим планетата чиста”- 2024 година- 3 място '
        />
      </Layout>
      <h3 className="text-black text-center mt-3">Други награди</h3>
      <Paragraph text='IX национален литературен конкурс "И децата покоряват светове. Покажи, че можеш"- 2023 година-поощрителна награда' />
      <Paragraph text='Конкурс за рисунка по случай 145 години от освобождението на България, организиран от НЧ "Люба Велич- 1905", с. Славяново, общ. Попово- 2023 година- 2 място' />
      <Paragraph text='Национален ученически конкурс "Пространство и време"- 2023 година- оценка 5.50' />
      <Paragraph text='Национален младежки конкурс "Свободата- Екзархът или Караджата"- 2023 година- награда' />
      <Paragraph text='Конкурс "Нарисувай ми театър"- 2023 година- специална награда' />
      <Paragraph text='Конкурс "Балканските войни 1912-1913 г. и националният идеал за единение на България"- 2023 година- награда' />
      <Paragraph text='Конкурс "Петьофи 200"- 2023 година-  100 лв ваучер' />
      <Paragraph text='Национален конкурс "Българска носия- изработка на българска автентчна носия в умален размер от 35 см до 80 см" -2023 година-  поощрителна награда ' />
      <Paragraph text="Международен литературен конкурс „Щом / искам, / ще стане“- 2023 година- отличена" />
      <Paragraph text="Национален ученически конкурс, посветен на 80-тата годишнина от събитията в с.Ястребино (1943)- 2024 година- специална награда" />
      <Paragraph text="Конкурс за рисунка, плакат, фотография и 3D-изображение “Световният климат: мисли глобално, действай локално!”- 2024 година- 1 място" />
      <Paragraph text='Трети национален литературен конкурс "Любовта е извор"- 2024 година- поощрителна награда' />
    </motion.div>
  );
}
