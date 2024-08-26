import Header from "../Header";
import Footer from "../Footer";

export default function Border({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
