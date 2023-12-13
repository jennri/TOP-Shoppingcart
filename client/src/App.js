import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';

//Importing bars
import { Navbar } from './components/navbar.jsx'
import { Footbar } from './components/footbar.jsx'

import { ProductList } from './pages/shop/shop-page.jsx'
import { ProductAdd } from './pages/shop/product-add'
import { Checkout } from './pages/shop/cart/checkout.jsx'

//Importing Products
import { ProductDetails } from './pages/shop/product-page.jsx'
import './pages/shop/shop-page.jsx'

// Importing context
import { ProductContextProvider } from './context/product-context.jsx'
import { ReviewContextProvider } from './context/review-context.jsx'
import { ShopContextProvider } from "./context/shop-context"

// Importing static pages
import { Front } from './pages/front'
import { Contact } from './pages/contact'
import { Termsofservice } from './pages/static/tos'
import { Shippingpolicy } from './pages/static/shipping'
import { Onlinetracking } from './pages/static/track'
import { Refundpolicy } from './pages/static/refund'
import { Faq } from './pages/static/faq'
import { Blog } from './pages/static/blog'
import { About } from './pages/static/about'
import { NotFound } from './pages/static/404'


function App() {

  return (
    <div className="App">
      {/* All components will have access to shop inventory, the shop context uses the product context, so it comes after */}
      <ProductContextProvider>
      <ShopContextProvider>
      <ReviewContextProvider>
      <Router>
        {/* Navbar will be present on all pages */}
        <Navbar />
        <Routes>
            <Route path="/" element={<Front />}/> 
            <Route path="/products" element={<ProductList />}/> 
            <Route path="/product-add" element={<ProductAdd />}/> 
            <Route path="/check-out" element={<Checkout />}/> 
              
              <Route path='/' exact Component={ProductList}></Route>
              <Route path='/products/:id' Component={ProductDetails}></Route>
              
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
      </ReviewContextProvider>
      </ShopContextProvider>
      </ProductContextProvider>

    </div>
  );
}

export default App;
