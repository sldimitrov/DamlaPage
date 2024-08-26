import GoToLink from "../../../UI/GoToLink";
import Border from "../../../UI/Border/Border";
import SectionTemplate from "../../../UI/SectionTemplate";

export default function Error({ error, errormsg }) {
  return (
    <Border>
      <SectionTemplate>
        <div
          className="flex justify-around flex-col w-full mx-auto"
          id="error-page"
        >
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="red"
              class="flex mx-auto mt-3 bi bi-bug"
              viewBox="0 0 16 16"
            >
              <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A5 5 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A5 5 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623M4 7v4a4 4 0 0 0 3.5 3.97V7zm4.5 0v7.97A4 4 0 0 0 12 11V7zM12 6a4 4 0 0 0-1.334-2.982A3.98 3.98 0 0 0 8 2a3.98 3.98 0 0 0-2.667 1.018A4 4 0 0 0 4 6z" />
            </svg>
            <h1 className="text-white text-center text-2xl md:text-3xl">
              {errormsg}
            </h1>
            <h2 className="text-red-400 mt-2 text-center text-xl md:text-3xl">
              {error}
            </h2>

            <p className="text-center text-black text-xl mt-2">
              За да се свържете, все пак, с автора - плъзнете надолу към
              секцията с контакти.
            </p>
          </section>
          <div className="actions flex flex-col h-36 justify-evenly md:w-72 mx-auto">
            <GoToLink
              path={"/works"}
              text="Прочети някоя творба"
              className="bg-gray-200 hover:bg-gray-300 rounded-md p-2"
              textClass="text-black text-2xl"
            />
            <GoToLink
              path={"/forme"}
              text="Научи повече за автора"
              className="bg-gray-200 hover:bg-gray-300 rounded-md p-2"
              textClass="text-black text-2xl"
            />
          </div>
        </div>
      </SectionTemplate>
    </Border>
  );
}
