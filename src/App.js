import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";  
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes> {/* Replaced Switch with Routes */}
        <Route path="/" element={<Home />} /> {/* Updated syntax */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Wildcard route for 404 */}
      </Routes>
    </>
  );
}

export default App;
