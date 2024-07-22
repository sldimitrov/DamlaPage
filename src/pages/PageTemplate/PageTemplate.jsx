import SectionTemplate from "../../components/Home/SectionTemplate";

export default function PageTemplate({ title, text }) {
  return (
    <SectionTemplate>
      <div className="flex h-100 flex-col">
        <h1 className="text-black text-center mt-10" id="text-title">
          {title}
        </h1>
        <p className="text-black text-left">{text}</p>
      </div>
    </SectionTemplate>
  );
}
