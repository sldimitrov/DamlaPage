import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./components/Home";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Almanah from "./pages/Almanah/Almanah";
import Myfather from "./pages/Myfather/Myfather";
import Democracy from "./pages/Democracy/Democracy";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/works", element: <Works /> },
  { path: "/almanah", element: <Almanah /> },
  { path: "/Myfather", element: <Myfather /> },
  { path: "/democracy", element: <Democracy /> },
]);

// App.jsx
function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router}>
        {/* <ScrollRestoration /> */}
      </RouterProvider>
      <Footer />
    </>
  );
}

export default App;
