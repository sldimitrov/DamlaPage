import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const labelClass =
    "text-white sm:text-center text-base md:text-2xl font-serif pl-3 lg:text-left";
  const inputClass =
    "bg-gray-200 w-52 text-black pl-1 md:pl-3 mt-1 h-9 md:text-2xl md:w-80 md:h-12 rounded-sm";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ys2rjm6", "template_pn6yjru", form.current, {
        publicKey: "ZNA6rCUzJJOCR6CQq",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="form flex flex-col mx-auto w-10/12">
      <h2 className="text-white mt-2 text-2xl font-semibold md:text-4xl font-mono text-center mb-4">
        Свържи се с aвтора
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="lg:flex justify-between">
          <div id="personal-info" className="flex gap-3 flex-col md:gap-5">
            <div className="flex flex-col  mx-auto">
              <label className={labelClass}>Name</label>
              <input className={inputClass} type="text" name="from_name" />
            </div>
            <div className="flex flex-col  mx-auto">
              <label className={labelClass}>Email</label>
              <input className={inputClass} type="email" name="email" />
            </div>
          </div>
          <div className="flex flex-col md:mt-3 md:items-center">
            <label className={labelClass}>Message</label>
            <textarea
              className="bg-gray-200 mt-1 text-black md:text-xl p-2 w-52 h-36 md:w-96 pl-1 rounded-sm"
              name="message"
            />
          </div>
        </div>

        <input
          className="flex w-48 md:w-48 md:h-14 md:text-3xl mx-auto mt-4 rounded-md text-slate-700 text-xl text-center mb-3 bg-cyan-400 hover:bg-cyan-200 outline hover:outline-2"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
