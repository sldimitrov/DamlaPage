import { useRef } from "react";
import emailjs from "@emailjs/browser";
import SectionTemplate from "../../../UI/SectionTemplate";

export default function InputForm({ handleSubmit, setError }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ys2rjm6", "template_84nbcut", form.current, {
        publicKey: "ZNA6rCUzJJOCR6CQq",
      })
      .then(
        () => {
          handleSubmit(true);
        },
        (error) => {
          handleSubmit("error");
          setError(error.text);
        }
      );
  };

  const labelClass =
    "text-black sm:text-center text-left text-base md:text-2xl font-serif pl-3 lg:text-left";
  const inputClass =
    "bg-gray-200 w-52 text-black pl-1 md:pl-3 mt-1 h-9 md:text-2xl md:w-80 md:h-12 rounded-sm";
  const form = useRef();

  return (
    <SectionTemplate subtitle={"Свържи се с автора"}>
      <div
        id="contact-form"
        className="form flex flex-col mt-3 mx-auto w-10/12"
      >
        <form className="md:mt-10" ref={form} onSubmit={sendEmail}>
          <div className="lg:flex justify-between">
            <div id="personal-info" className="flex gap-3 flex-col md:gap-5">
              <div className="flex flex-col  mx-auto">
                <label className={labelClass}>* Име</label>
                <input
                  required
                  className={inputClass}
                  type="text"
                  name="from_name"
                />
              </div>
              <div className="flex flex-col mx-auto">
                <label className={labelClass}>* Имейл</label>
                <input
                  required
                  className={inputClass}
                  type="email"
                  name="email"
                />
              </div>
            </div>
            <div className="flex flex-col mt-3 items-center">
              <label className={labelClass}>* Съобщение</label>
              <textarea
                required
                className="bg-gray-200 mx-auto mt-1 text-black md:text-xl p-2 w-52 h-36 md:w-96 pl-1 rounded-sm"
                name="message"
              />
            </div>
          </div>

          <input
            className="flex w-48 md:w-48 md:h-14 md:text-3xl mx-auto mt-4 rounded-md text-slate-700 text-xl text-center mb-3 bg-white hover:bg-slate-300 outline hover:outline-2"
            type="submit"
            value="Изпрати"
          />
        </form>
      </div>
    </SectionTemplate>
  );
}
