import SectionTemplate from "./SectionTemplate";
import Gallery from "./Gallery";
import Intro from "./Intro";
import GoToLink from "../Works/Card/GoToLink";

export default function Home() {
  return (
    <>
      <SectionTemplate>
        <Intro />
        <Gallery />
        <GoToLink path="/works" text="КЪМ ТВОРБИ" />
      </SectionTemplate>
    </>
  );
}
