import SectionTemplate from "../../UI/SectionTemplate";
import GoToLink from "../../components/Works/Card/GoToLink/GoToLink";

export default function PageTemplate({ title, text, prevPath, nextPath }) {
  return (
    <SectionTemplate title={title}>
      <div className="flex h-100 flex-col pt-4">
        <p className="text-black text-left md:m-3">{text}</p>
        <div className="flex gap sm:gap-1 md:gap-5">
          <GoToLink
            path={prevPath}
            text={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                color="#000000"
                fill="none"
              >
                <path
                  d="M10 12L20 12"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.41418 13.6026L6.38061 14.3639C7.94641 15.5974 8.72931 16.2141 9.36467 15.9328C10 15.6515 10 14.6881 10 12.7613V11.2387C10 9.31191 10 8.34853 9.36467 8.06721C8.72931 7.7859 7.94641 8.40264 6.38062 9.63612L5.41418 10.3974C4.47141 11.1401 4.00003 11.5115 4.00003 12C4.00003 12.4885 4.47141 12.8599 5.41418 13.6026Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            }
          />
          <GoToLink path="/works" text=""></GoToLink>
          <GoToLink path={nextPath} text="СЛЕДВАЩ РАЗКАЗ" />
        </div>
      </div>
    </SectionTemplate>
  );
}
