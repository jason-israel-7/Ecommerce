import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import BlogPage from "./pages/blogs";
import ContactPage from "./pages/contact";
import Login from "./pages/login";
import Register from "./pages/register";
import Navbar from "./components/Navbar";
import FooterPage from "./components/footer";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Nopages from "./pages/nopages";



function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductDetailPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="blogs" element={<BlogPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
          <FooterPage/>
        </Router>
      </CartProvider>
      </AuthProvider>
      
  
  );
}

export default App;
