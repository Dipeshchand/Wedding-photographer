import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import IntroPage from "./pages/IntroPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  // 1️⃣ INTRO PAGE
  {
    path: "/",
    element: <IntroPage />,
  },

  // 2️⃣ MAIN WEBSITE
  {
    path: "/",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "testimonials", element: <Testimonials /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
