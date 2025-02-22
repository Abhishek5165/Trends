import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Login from './pages/Login';
import PlaceOrders from './pages/PlaceOrders';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import { ToastContainer, toast } from 'react-toastify';
import Verify from './pages/Verify';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <NavBar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Products />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrders />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/verify' element={<Verify />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
