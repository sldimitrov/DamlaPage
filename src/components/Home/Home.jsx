import GoToLink from "../Works/Card/GoToLink";
import selfPhoto from "../../pictures/self/profile.jpg";

export default function Home() {
  return (
    <>
      <div id="home" className="container">
        <div className="flex flex-col justify-center md:flex-row h-full  w-full">
          <h1
            className="font-extrabold text-center mt-10 text-5xl md:text-6xl text-white"
            id="heading"
          >
            Дамла Кемик
          </h1>
          <img
            className="h-48 w-auto md:h-56 mx-8 rounded-full"
            src={selfPhoto}
            alt="writer with official clothing"
          />
        </div>

        <h2
          className="title mt-3 text-3xl text-white font-serif mb-10"
          id="sub-title"
        >
          Думите са моят начин да въздействам върху чувствата на хората.
        </h2>
        <hr className="h-3" />
        <GoToLink path="/works" text="КЪМ ТВОРБИ" />
      </div>
    </>
  );
}
