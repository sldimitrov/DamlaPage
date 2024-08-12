export default function SectionTemplate({ children, title, subtitle = "" }) {
  return (
    <>
      <div
        className="container p-auto bg-white opacity-90 rounded-lg mt-3 mb-3"
        id="path"
      >
        <header className="flex items-center flex-col">
          <h2 className="text-black text-lg mt-4" id="works-title">
            {title}
          </h2>
          <h2
            className="text-black leading-10 text-lg mt-3 sm:line-height: 1.25;"
            id="works-subtitle"
          >
            {subtitle}
          </h2>
        </header>
        <hr className="bg-black h-0.5 mt-4" />
        {children}
      </div>
    </>
  );
}
