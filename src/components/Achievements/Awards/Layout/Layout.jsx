export default function Layout({ children, img, alt, flag }) {
  const imageCls = "w-96 mx-auto mt-3 rounded-3xl";

  return (
    <div className="lg:flex gap-3">
      {flag && <img className={imageCls} src={img} alt={alt} />}
      <div className="flex flex-col justify-around">{children}</div>
      {!flag && <img className={imageCls} src={img} alt={alt} />}
    </div>
  );
}
