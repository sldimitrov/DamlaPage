import GoToLink from "../../UI/GoToLink";
import SectionTemplate from "../../UI/SectionTemplate";

export default function ErrorPage() {
  return (
    <SectionTemplate
      title={"Error occured"}
      subtitle={"Could not find this page!"}
    >
      <div className="w-44 mx-auto">
        <GoToLink
          path="/"
          text="Начало"
          className="bg-gray-200 hover:bg-gray-300 rounded-md"
          textClass="text-3xl"
        />
      </div>
    </SectionTemplate>
  );
}
