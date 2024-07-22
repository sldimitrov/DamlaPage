import SectionTemplate from "../../components/Home/SectionTemplate";
import GoToLink from "../../components/Works/Card/GoToLink/GoToLink";

export default function PageTemplate({ title, text, nextPath }) {
  return (
    <SectionTemplate>
      <div className="flex h-100 flex-col">
        <h1 className="text-black text-center mt-10" id="text-title">
          {title}
        </h1>
        <p className="text-black text-left">{text}</p>
        <div className="flex gap-5">
          <GoToLink path="/works" text='ВЪРНИ СЕ ОБРАТНО В ,,Творби"' />
          <GoToLink path={nextPath} text="ПРОЧЕТИ СЛЕДВАЩИЯ РАЗКАЗ" />
        </div>
      </div>
    </SectionTemplate>
  );
}
