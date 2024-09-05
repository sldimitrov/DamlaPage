import SectionTemplate from "../../UI/SectionTemplate";
import View from "./View";
import firstPoetPh from "../../pictures/poets/mitko.png";
import secondPoetPh from "../../pictures/poets/kalin.jpg";
import thirdPoetPh from "../../pictures/poets/snezhana_galcheva.jpg";
import useScroll from "../../hooks/useScroll";
import { motion } from "framer-motion";

export default function Opinions() {
  useScroll();

  return (
    <SectionTemplate title={"Отзиви"}>
      <motion.section
        animate={{ opacity: [0.7, 1], scale: [0.7, 1] }}
        className="section-title"
      >
        <View
          index={1}
          photo={firstPoetPh}
          info="поет, превеждан на седем езика и организатор на културни събития."
          name="Митко Ламбов"
          opinion='...кратки изречения, пълни с ухание и мирис на нещо интимно
              познато. Всичко в мисълта и чувствата, които думите ти създават,
              върви плавно, ясно, без излишна заря. На моменти телеграфният ти
              стил е до болка като скалпел."'
        />
        <View
          photo={secondPoetPh}
          name="Калин Терзийски"
          info='български поет и писател, председател на журито към Национален конкурс "Янаки Петров"'
          opinion='"Аз си помислих, като четох нейния разказ, че тя е дошла от
              Афганистан и е бежанка. И това е изключително постижение, защото
              тя е на 18 години и не е бежанка. Тя си е оттук. Така че всички
              сме бежанци по някакъв начин. Мисля, че всички го (разказа
              "Обещавам") поставихме на едно от първите места"'
        />
        <View
          index={1}
          photo={thirdPoetPh}
          name="Снежана Галчева"
          info="поет и журналист"
          opinion='"Изключително талантливо дете. Тя беше само на 14 години, когато взе
        участие в този конкурс и сподели това стихотворение. Много се радвам, че
        имаме такива талантливи български деца. Нека да продължава да се
        развива, за да можем наистина да покажем нивото на българската култура!
        Успех!"'
        />
      </motion.section>
    </SectionTemplate>
  );
}
