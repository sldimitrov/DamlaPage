export default function Paragraph({ text, className, ...props }) {
  return (
    <p
      className={`text-black text-xl text-left font-sans mt-3 pt-1 p-1 w-full text-left" ${className}`}
      {...props}
    >
      &#160;{text}
    </p>
  );
}
