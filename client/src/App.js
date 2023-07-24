import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar.jsx'
import { Footbar } from './components/footbar.jsx'
import { Products } from './pages/shop/shop'
import { Front } from './pages/front'
import { Contact } from './pages/contact'
import { ShopContextProvider } from "./context/shop-context"

// Importing from static folder
import { Termsofservice } from './pages/static/tos'
import { Shippingpolicy } from './pages/static/shipping'
import { Onlinetracking } from './pages/static/track'
import { Refundpolicy } from './pages/static/refund'
import { Faq } from './pages/static/faq'
import { Blog } from './pages/static/blog'
import { About } from './pages/static/about'
import { NotFound } from './pages/static/404'


function App() {
  const [message, setMessage] = useState("");

useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);


  return (
    <div className="App">
      {/* All components will have access to shop inventory */}
      <ShopContextProvider>
      <Router>
        {/* Navbar will be present on all pages */}
        <Navbar />
        {message}
        <Routes>
            <Route path="/" element={<Front />}/> 
            <Route path="/products" element={<Products />}/> 
            <Route path="/contact-us" element={<Contact />}/> 
            <Route path="/terms-of-services" element={<Termsofservice />}/> 
            <Route path="/shipping-policy" element={<Shippingpolicy />}/> 
            <Route path="/online-tracking" element={<Onlinetracking />}/> 
            <Route path="/refund-policy" element={<Refundpolicy />}/> 
            <Route path="/frequently-asked-questions" element={<Faq />}/> 
            <Route path="/blog" element={<Blog />}/> 
            <Route path="/about-us" element={<About />}/> 
            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footbar />
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;