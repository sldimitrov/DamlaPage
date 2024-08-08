import SectionTemplate from "../../components/Home/SectionTemplate";
import GoToLink from "../../components/Works/Card/GoToLink/GoToLink";

export default function PageTemplate({ title, text, prevPath, nextPath }) {
  return (
    <SectionTemplate>
      <div className="flex h-100 flex-col">
        <h1 className="text-black text-center mt-10" id="text-title">
          <i>{title}</i>
        </h1>
        <p className="text-black text-left md:m-3">{text}</p>
        <div className="flex gap sm:gap-1 md:gap-5">
          <GoToLink path={prevPath} text="ПРЕДИШЕН РАЗКАЗ" />
          <GoToLink path="/works" text=',,ТВОРБИ"' />
          <GoToLink path={nextPath} text="СЛЕДВАЩ РАЗКАЗ" />
        </div>
      </div>
    </SectionTemplate>
  );
}
