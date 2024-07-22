export default function SectionTemplate({ children }) {
  return (
    <>
      <hr className="w-full bg-white mt-4" />
      <div className="container pt-2 bg-slate-200 rounded-lg " id="path">
        {children}
      </div>
      <hr className="w-full bg-white h-5" />
    </>
  );
}
