import SectionTemplate from "./SectionTemplate";
import Gallery from "./Gallery";
import Intro from "./Intro";

export default function Home() {
  return (
    <>
      <SectionTemplate>
        <Intro />
        <Gallery />
      </SectionTemplate>
    </>
  );
}
