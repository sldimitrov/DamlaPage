import About from "./About";
import GoToLink from "../Works/Card/GoToLink";

export default function Home() {
  return (
    <>
      <div id="home" className="container">
        <h1
          className="font-extrabold text-center text-4xl mt-3 text-white"
          id="heading"
        >
          Дамла Кемик
        </h1>
        <h2 className="title mt-3 text-white font-serif mb-10" id="sub-title">
          Думите са моят начин да въздействам върху чувствата на хората.
        </h2>
        <hr className="h-3" />
        <GoToLink path="/works" text="КЪМ ТВОРБИ" />
      </div>
    </>
  );
}
