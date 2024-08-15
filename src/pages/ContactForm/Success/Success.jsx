import GoToLink from "../../../UI/GoToLink";

export default function Success() {
  return (
    <div
      className="flex justify-around flex-col w-full mx-auto"
      id="success-page"
    >
      <section>
        <h1 className="text-white text-center text-2xl md:text-3xl">
          Съобщението беше изпратено успешно!
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32S"
          fill="currentColor"
          className="mx-auto mt-5 bi bi-send"
          viewBox="0 0 16 16"
        >
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
        </svg>
      </section>
      <div className="actions flex flex-col h-36 justify-between md:w-72 mx-auto">
        <GoToLink
          path={"/works"}
          text="Прочети някоя творба"
          className="bg-white rounded-md p-2"
          textClass="text-black text-2xl"
        />
        <GoToLink
          path={"/forme"}
          text="Научи повече за автора"
          className="bg-white hover:bg-blue-300 rounded-md p-2"
          textClass="text-black text-2xl"
        />
      </div>
      <h2 className="text-white text-center text-xl">
        Очаквайте отговор възможно най-скоро.
      </h2>
    </div>
  );
}
