import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/Navbar";
import FullScreenNav from "./components/navigation/FullScreenNav";
import Contact from "./pages/Contact";
import Blogue from "./pages/Blogue";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogue" element={<Blogue/>}/>
      </Routes>
    </div>
  );
}

export default App;
