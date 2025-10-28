import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/Navbar";
import FullScreenNav from "./components/navigation/FullScreenNav";
import usePageTitle from "./hooks/usePageTitle";
import { useContext } from "react";
import { NavbarContext } from "./context/NavContext";

function App() {
  usePageTitle();
  const {navOpen, setNavOpen} = useContext(NavbarContext);
  return (
    <div className="overflow-hidden">
      <Navbar />
      <FullScreenNav />
      {!navOpen && <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>}
    </div>
  );
}

export default App;
