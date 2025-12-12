// import { createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Portfolio from "./pages/Portfolio";
// import Testimonials from "./pages/Testimonials";
// import Contact from "./pages/Contact";
// import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,    // Wraps navbar + footer + page content
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/about", element: <About /> },
//       { path: "/portfolio", element: <Portfolio /> },
//       { path: "/testimonials", element: <Testimonials /> },
//       { path: "/contact", element: <Contact /> },
//     ],
//   },
// ]);

// export default router;


import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/testimonials", element: <Testimonials /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default router;
