export default function View({ photo, name, info, opinion, index }) {
  let leftPhoto, rightPhoto;
  index === 1 ? (leftPhoto = photo) : (rightPhoto = photo);

  let imgClasses = "writer h-auto max-w-full rounded-md shadow-2xl";

  return (
    <div
      id="opinions-container"
      className="flex flex-col md:flex-row justify-around m-3"
    >
      {leftPhoto && (
        <img
          className={imgClasses}
          src={photo}
          alt="enlightened person that gave his opinion"
        />
      )}

      <section className="flex flex-col justify-center m-3">
        <h2 className="text-black text-center text-3xl md:text-4xl">{name}</h2>
        <h3 className="text-black text-center text-base md:text-lg mt-3 text-slate-300 italic">
          {info}
        </h3>
        <p className="text-black text-base md:text-xl text-center mt-3">
          {opinion}
        </p>
      </section>
      {rightPhoto && (
        <img
          className={imgClasses}
          src={photo}
          alt="enlightened person that gave his opinion"
        />
      )}
      <hr className="h-1 bg-grey" />
    </div>
  );
}
