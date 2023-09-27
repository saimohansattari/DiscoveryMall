import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Singleproduct from "./pages/singleproductpage/Singleproduct";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Singleproduct />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
