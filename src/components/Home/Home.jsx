import SectionTemplate from "./SectionTemplate";
import Gallery from "./Gallery";
import Intro from "./Intro";
import About from "./About";

export default function Home() {
  return (
    <>
      <SectionTemplate>
        <Intro />
        <Gallery />
        <About />
      </SectionTemplate>
    </>
  );
}
