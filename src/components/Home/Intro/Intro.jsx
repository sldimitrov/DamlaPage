import GoToLink from "../../../UI/GoToLink";
import selfPhoto from "../../../pictures/self/profile.jpg";

export default function Intro() {
  return (
    <div id="intro">
      <div className="flex flex-col justify-center items-center gap-3 md:flex-row h-full  w-full">
        <h1
          className="font-extrabold text-center md:mt-10 text-5xl md:text-6xl text-white"
          id="heading"
        >
          Дамла Кемик
        </h1>
        <figure className="w-60">
          <img
            className="rounded-full w-auto h-auto shadow-md dark:shadow-gray-300"
            src={selfPhoto}
            alt="image description"
          ></img>
        </figure>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="currentColor"
        className="bi bi-book-half mx-auto mt-3"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
      </svg>
      <h2 className="title mt-3 text-3xl text-white mb-10" id="sub-title">
        Думите са моят начин да въздействам върху чувствата на хората.
      </h2>
      <hr className="h-3" />
      <section id="author-info">
        <p className="w-full text-center md:text-xl font-thin">
          -млад писател, есеист, поет
          <br />
          -студент по българска филология в ПУ ,,Паисий Хилендарски"
          <br />
          -човек на изкуството
          <br />
          -лауреат на много национални и международни конкурси
          <br />
          <div className="button-container w-32 md:w-80 mx-auto">
            <GoToLink
              path={"/forme"}
              text={"НАУЧЕТЕ ПОВЕЧЕ"}
              className={"bg-blue-300 hover:bg-blue-500 rounded-2xl w-48 h-9"}
            />
          </div>
        </p>
      </section>
    </div>
  );
}
