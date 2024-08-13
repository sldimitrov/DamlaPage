export default function Button({ text, className, ...props }) {
  return (
    <button
      className={`rounded-md p-2 text-xl md:text-2xl ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}
