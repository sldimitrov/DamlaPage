import SectionTemplate from "../SectionTemplate/SectionTemplate";
import Gallery from "./Gallery";
import Intro from "./Intro/Intro";

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
