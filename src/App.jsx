import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home"
import ServicesSection from "./components/ServicesSection";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ReachUs from "./components/ReachUs";

function App() {
  return (
    <Router>
      <div className=" flex bg-amber-100">
        <Sidebar />
        <div className="flex flex-col w-full">
        <Home/>
        <ServicesSection />
         <Gallery />
         <ReachUs />
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
