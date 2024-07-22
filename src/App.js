import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Almanah from "./pages/Almanah/Almanah";
import Myfather from "./pages/Myfather/Myfather";
import Democracy from "./pages/Democracy/Democracy";

const router = createBrowserRouter([
  { path: "/", element: <Body /> },
  { path: "/almanah", element: <Almanah /> },
  { path: "/Myfather", element: <Myfather /> },
  { path: "/democracy", element: <Democracy /> },
]);

// App.jsx
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
