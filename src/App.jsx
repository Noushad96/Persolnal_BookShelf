import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Mybook from "./Components/Mybook";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mybook" element={<Mybook />} />
      </Routes>
    </>
  );
}

export default App;
