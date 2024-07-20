export default function Photo({ srcPic, idNumber, altText }) {
  return (
    <div className="photo">
      <img src={srcPic} id={idNumber} className="images" alt={altText} />
    </div>
  );
}
