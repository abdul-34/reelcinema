import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShowTime from "./pages/ShowTime";
import Experiences from "./pages/Experiences";
import Offer from "./pages/Offer";
import Locations from "./pages/Locations";
import Food from "./pages/Food";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showtime" element={<ShowTime />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/offers/offer" element={<Offer />} />
          <Route path="/food" element={<Food />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
