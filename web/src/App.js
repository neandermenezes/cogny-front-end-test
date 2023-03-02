import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
