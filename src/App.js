import Home from "./Components/Home/Home";
import Details from "./Components/Details/Details";
import Footer from "./Components/footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
 
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
