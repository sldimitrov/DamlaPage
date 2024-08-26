import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home"; // Parts of the UI
import Works from "./components/Works"; // Works
import Almanah from "./pages/Almanah/Almanah";
import Myfather from "./pages/Myfather/Myfather";
import Democracy from "./pages/Democracy/Democracy";
import Coffee from "./pages/Coffee";
import Human from "./pages/Human/Human";
import ForMe from "./components/ForMe"; // Sections
import Achievements from "./components/Achievements";
import Opinions from "./components/Opinions";
import MathLove from "./pages/MathLove";
import ContactForm from "./pages/ContactForm";

const router = createBrowserRouter([
  { path: "/", element: <Home /> }, // Sections
  { path: "/forme", element: <ForMe /> },
  { path: "/works", element: <Works /> },
  { path: "/achievements", element: <Achievements /> },
  { path: "/opinions", element: <Opinions /> },
  { path: "/almanah", element: <Almanah /> }, // Works
  { path: "/Myfather", element: <Myfather /> },
  { path: "/democracy", element: <Democracy /> },
  { path: "/coffee", element: <Coffee /> },
  { path: "/human", element: <Human /> },
  { path: "/mathlove", element: <MathLove /> },
  { path: "/contactform", element: <ContactForm /> }, // Additional
]);

// App.jsx
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
