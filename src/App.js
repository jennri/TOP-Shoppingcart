import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar.jsx'
import { Products } from './pages/shop/shop'
import { Cart } from './pages/cart'
import { Contact } from './pages/contact'
import { Front } from './pages/front'
import { NotFound } from './pages/404'


function App() {
  return (
    <div className="App">
      <Router>
        {/* Navbar will be present on all pages */}
        <Navbar />
        <Routes>
            <Route path="/" element={<Front />}/> 
            <Route path="/products" element={<Products />}/> 
            <Route path="/cart" element={<Cart />}/> 
            <Route path="/contact" element={<Contact />}/> 
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
