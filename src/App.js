import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/home/home';
import Product from './Pages/product/product';
import Navbar from './Pages/nav/nav';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        {/* <Route path="/" element={<Navbar />}> */}
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
