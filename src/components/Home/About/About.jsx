export default function About() {
  return (
    <>
      <section id="about" className="mt-5">
        <h1
          id="about-me"
          className="title text-4xl mb-3 text-center text-white"
        >
          OТНОСНО МЕН
        </h1>
        <div id="boxes-container">
          <ul id="writer" className="list-cell">
            <li id="writer-txt" className="list-item">
              Писател
            </li>
          </ul>
          <ul id="artist" className="list-cell">
            <li id="artist-txt" className="list-item">
              Артист
            </li>
          </ul>
          <ul id="painter" className="list-cell">
            <li id="painter-txt" className="list-item">
              Художник
            </li>
          </ul>
          <ul id="human" className="list-cell">
            <li id="human-txt" className="list-item">
              Човек
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
