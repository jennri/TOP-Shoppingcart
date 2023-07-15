import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar'
import { Products } from './pages/shop/products'
import { Cart } from './pages/cart'
import { Contact } from './pages/contact'
import { Front } from './pages/front'


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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
