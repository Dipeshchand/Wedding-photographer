import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServicesSection from "./components/ServicesSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ReachUs from "./components/ReachUs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <ServicesSection />
                  <Gallery />
                  <ReachUs />
                  <Footer />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <Services />
                  <Footer />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <About />
                  <Footer />
                </>
              }
            />
            <Route path="/contact" element= {  <>
            <Contact />
            <Footer/>
            </> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
