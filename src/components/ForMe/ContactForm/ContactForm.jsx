export default function ContactForm() {
  const labelClass =
    "text-white sm:text-center text-xl font-serif pl-3 lg:text-left";
  const inputClass = "bg-gray-200 mt-1 h-9 w-36 md:w-56 pl-1 rounded-sm";

  return (
    <div id="contact-form" className="mt-6">
      <div className="form flex flex-col mx-auto w-10/12">
        <h2 className="text-white font-semibold text-4xl font-mono text-center mb-4">
          Свържи се с aвтора
        </h2>
        <section className="flex flex-col items-center md:flex-row justify-between">
          <div id="personal-info">
            <div className="name flex flex-col  mx-auto">
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
              className="bg-gray-200 w-36 h-32 md:w-56 pl-1 rounded-sm"
              name="message"
              id="message"
            ></textarea>
          </div>
        </section>

        <button className="text-white text-center mb-3 bg-orange-400 hover:bg-orange-600 w-32 mx-auto mt-3 rounded-md">
          Изпрати
        </button>
      </div>
    </div>
  );
}
