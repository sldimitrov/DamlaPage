import bodyImg from "../../../pictures/self/profile.jpg";
import portImg from "../../../pictures/self/redDressProfile.jpg";
import writingHand from "../../../pictures/collection/anthology.jpg";
import painting from "../../../pictures/collection/almanah.jpg";
import Photo from "./Photo";
import GoToLink from "../../Works/Card/GoToLink";

export default function Gallery() {
  return (
    <>
      <div className="photo-gallery">
        <div className="column">
          <Photo
            srcPic={bodyImg}
            idNumber={"profile-img"}
            alt={"Damla at her graduation"}
          />
          <Photo
            srcPic={painting}
            idNumber={"writing-hand"}
            alt={"A man writing something on a paper"}
          />
        </div>
        <div className="column">
          <Photo
            srcPic={writingHand}
            idNumber={"writing-hand"}
            alt={"Damla in front of free university in Bourgas"}
          />
          <Photo
            srcPic={portImg}
            idNumber={"profile-img"}
            alt={"Damla at her photo-session in Pomorie's port"}
          />
        </div>
      </div>
      <GoToLink path="/works" text="КЪМ ТВОРБИ" />
    </>
  );
}
