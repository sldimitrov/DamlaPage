import Gallery from "./Gallery";
import Intro from "./Intro/Intro";

export default function Home() {
  return (
    <>
      <hr className="w-full bg-white h-5" />
      <div className="container pt-2 bg-gray-300" id="path">
        <Intro />
        <Gallery />
      </div>
      <hr className="w-full bg-white h-10" />
    </>
  );
}
