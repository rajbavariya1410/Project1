import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// User Panel Raouting

import LayoutApp from './LayoutApp'
import Products from './components/Products'
import OffersPage from './components/OfferPage'
import Details from './components/Details'
import AddTOCart from './components/AddToCart'
import Checkout from './components/Checkout'
import ContactUs from './components/ContactUs'

// Admine Panel Raouting

import AdmineLayout from './AdmineLayout'
import AdmineDashboard from './admincomponents/AdmineDashboard'
import Users from './admincomponents/Users'
import AddProducts from './admincomponents/AddProducts'
import ManegeProducts from './admincomponents/ManegeProducts'
import Updateproduct from './admincomponents/Updateproduct'
import Orders from './admincomponents/Orders'
import Contact from './admincomponents/Contact'

// CSS File
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>

        {/* User Panel Raouting */}

        <Route path="/" element={<LayoutApp />} />
        <Route path="/products" element={<Products />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/details/addtocart" element={<AddTOCart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Admine Panel Raouting */}

        
        <Route path="/adminelayout" element={<AdmineLayout />}>
          <Route index element={<AdmineDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="add-products" element={<AddProducts />} />
          <Route path="manege-products" element={<ManegeProducts />} />
          <Route path="manege-products/updateproduct/:id" element={<Updateproduct />} />
          <Route path="orders" element={<Orders />} />
          <Route path="contacts" element={<Contact />} />
        </Route>

      </Routes>
    </Router>
  </StrictMode>,
)
