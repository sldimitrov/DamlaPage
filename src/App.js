import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Almanah from "./pages/Almanah/Almanah";

const router = createBrowserRouter([
  { path: "/", element: <Body /> },
  { path: "/almanah", element: <Almanah /> },
  { path: "/azsme", element: <Almanah /> },
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
