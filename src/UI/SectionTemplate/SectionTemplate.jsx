export default function SectionTemplate({ children, title, subtitle = "" }) {
  return (
    <div
      className="container p-auto bg-white opacity-90 rounded-lg mt-3 mb-3"
      id="path"
    >
      <header className="flex items-center flex-col">
        <h2 className="text-black" id="works-title">
          {title}
        </h2>
        <h2
          className="text-black text-center leading-10 text-lg mt-3 sm:line-height: 1.25;"
          id="works-subtitle"
        >
          {subtitle}
        </h2>
      </header>
      <hr className="bg-black h-0.5 mt-4" />
      {children}
      <div className="flex mx-auto w-full justify-center">
        <a href="/">
          <h6 className="mt-4 text-slate-500 italic text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-book-half mx-auto mt-3"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
            </svg>
            Damla's Page
          </h6>
        </a>
      </div>
    </div>
  );
}
