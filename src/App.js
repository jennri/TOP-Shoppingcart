import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar.jsx'
import { Footbar } from './components/footbar.jsx'
import { Products } from './pages/shop/shop'
import { Cart } from './pages/shop/cart'
import { Front } from './pages/front'
import { Contact } from './pages/contact'
import { ShopContextProvider } from "./context/shop-context"

// Importing from static folder
import { Termsofservice } from './pages/static/tos'
import { Shippingpolicy } from './pages/static/shipping'
import { Privacypolicy } from './pages/static/privacy'
import { Refundpolicy } from './pages/static/refund'
import { Faq } from './pages/static/faq'
import { Blog } from './pages/static/blog'
import { About } from './pages/static/about'
import { NotFound } from './pages/static/404'


function App() {
  return (
    <div className="App">
      {/* All components will have access to shop inventory */}
      <ShopContextProvider>
      <Router>
        {/* Navbar will be present on all pages */}
        <Navbar />
        <Routes>
            <Route path="/" element={<Front />}/> 
            <Route path="/products" element={<Products />}/> 
            <Route path="/cart" element={<Cart />}/> 
            <Route path="/contact-us" element={<Contact />}/> 
            <Route path="/terms-of-services" element={<Termsofservice />}/> 
            <Route path="/shipping-policy" element={<Shippingpolicy />}/> 
            <Route path="/privacy-policy" element={<Privacypolicy />}/> 
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
