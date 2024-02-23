import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Singleproduct from "./pages/singleproductpage/Singleproduct";
import Cartpage from "./pages/cartpage/Cartpage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Singleproduct />} />
          <Route path="/Cart" element={<Cartpage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
