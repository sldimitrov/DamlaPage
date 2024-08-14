import SectionTemplate from "../../UI/SectionTemplate";
import GoToLink from "../../UI/GoToLink";

export default function PageTemplate({ title, text, prevPath, nextPath }) {
  const goToBtnClass = "bg-slate-300 hover:bg-slate-400 rounded-2xl w-24 h-9";

  return (
    <SectionTemplate title={title}>
      <div className="flex h-100 flex-col pt-4">
        <p className="text-black text-left md:m-3">{text}</p>
        <div className="flex gap-3 sm:gap-1 md:gap-5">
          <GoToLink
            path={prevPath}
            className={goToBtnClass}
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-left text-black"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            }
          />
          <GoToLink
            path="/works"
            className={goToBtnClass}
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-house text-black"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            }
          />
          <GoToLink
            path={nextPath}
            className={goToBtnClass}
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-arrow-right text-black"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            }
          />
        </div>
      </div>
    </SectionTemplate>
  );
}
