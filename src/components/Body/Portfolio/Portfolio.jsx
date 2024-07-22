import { useState } from "react";
import SectionTemplate from "../SectionTemplate";
import workImg from "../../../pictures/almanah.jpg";
import Modal from "../Modal";

export default function Portfolio() {
  const [openModal, setOpenModal] = useState(false);
  console.log(openModal);

  return (
    <SectionTemplate>
      <div className="flex justify-center">
        <h2 className="text-black text-lg" id="works">
          Творби
        </h2>
      </div>
      <div class="card" id="card1">
        <img src={workImg} class="card-img-top" alt="almanah book" />
        <div class="card-body">
          <h5 class="card-title">АЛМАНАХ</h5>
          <p class="card-text">
            Вътре се помещава разказът ми ,,Обещавам". Той идва заедно с
            наградата ми на първи национален конкурс ,,Янаки Петров"
          </p>
          <button className="flex justify-center w-24 mt-2 bg-blue-300 rounded-md p-2">
            Click me
          </button>
        </div>
      </div>
    </SectionTemplate>
  );
}
