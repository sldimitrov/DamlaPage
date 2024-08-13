export default function ContactForm() {
  const labelClass =
    "text-white sm:text-center text-base md:text-2xl font-serif pl-3 lg:text-left";
  const inputClass =
    "bg-gray-200 w-52 text-black pl-1 md:pl-3 mt-1 h-9 md:text-2xl md:w-80 md:h-12 rounded-sm";

  return (
    <div id="contact-form" className="mt-5">
      <div className="form flex flex-col mx-auto w-10/12">
        <h2 className="text-white mt-2 text-2xl font-semibold md:text-4xl font-mono text-center mb-4">
          Свържи се с aвтора
        </h2>
        <section className="md:mt-12 flex flex-col gap-3 items-center md:flex-row justify-between">
          <div id="personal-info" className="flex gap-3 flex-col md:gap-5">
            <div className="flex flex-col  mx-auto">
              <label className={labelClass} htmlFor="name">
                Име:
              </label>
              <input className={inputClass} id="name" type="name" name="name" />
            </div>
            <div className="flex flex-col  mx-auto">
              <label className={labelClass} htmlFor="email">
                Имейл:
              </label>
              <input
                className={inputClass}
                id="email"
                type="email"
                name="email"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className={labelClass} htmlFor="message">
              Съобщение:
            </label>
            <textarea
              className="bg-gray-200 mt-1 text-black md:text-xl p-2 w-52 h-36 md:w-96 pl-1 rounded-sm"
              name="message"
              id="message"
            ></textarea>
          </div>
        </section>
        <button className="w-48 md:w-48 md:h-14 md:text-3xl mx-auto mt-4 rounded-md text-slate-700 text-xl text-center mb-3 bg-cyan-400 hover:bg-cyan-200 outline hover:outline-2">
          Изпрати
        </button>
      </div>
    </div>
  );
}
