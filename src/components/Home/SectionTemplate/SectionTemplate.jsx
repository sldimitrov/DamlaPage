export default function SectionTemplate({ children }) {
  return (
    <>
      <div
        className="container pt-2 bg-slate-200 rounded-lg mt-3 mb-3"
        id="path"
      >
        {children}
      </div>
    </>
  );
}
