import bodyImg from "../../../../pictures/profile.jpg";
import portImg from "../../../../pictures/redDressProfile.jpg";
import universityImg from "../../../../pictures/universityReward.jpg";
import booksImg from "../../../../pictures/anthologyBlue.jpg";
import writingHand from "../../../../pictures/anthology.jpg";
import painting from "../../../../pictures/almanah.jpg";
import Photo from "./Photo";

export default function Gallery() {
  return (
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
        <Photo
          srcPic={portImg}
          idNumber={"profile-img"}
          alt={"Damla at her photo-session in Pomorie's port"}
        />
      </div>
      <div className="column">
        <Photo
          srcPic={writingHand}
          idNumber={"writing-hand"}
          alt={"Damla in front of free university in Bourgas"}
        />
        <Photo
          srcPic={universityImg}
          idNumber={"none"}
          alt={"A man writing something on a paper"}
        />
        <Photo
          srcPic={booksImg}
          idNumber={"writing-hand"}
          alt={"A man writing something on a paper"}
        />
      </div>
    </div>
  );
}
