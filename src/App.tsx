import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollManager from "./lib/ScrollManager";
import Landing from "./pages/Landing";
import AiSolutions from "./pages/AiSolutions";
import BusinessAviation from "./pages/BusinessAviation";
import RealEstate from "./pages/RealEstate";
import Investments from "./pages/Investments";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ai-solutions" element={<AiSolutions />} />
        <Route path="/business-aviation" element={<BusinessAviation />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/investments" element={<Investments />} />
      </Routes>
    </BrowserRouter>
  );
}
