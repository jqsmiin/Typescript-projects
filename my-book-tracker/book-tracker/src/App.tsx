import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";

function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/my-books" element={<Home />} />
          <Route path="/create-book" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;