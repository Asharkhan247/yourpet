import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './includes/Header';
import Footer from './includes/Footer';
import About from './Pages/About';
import Products from './Pages/Products';
import Gallery from './Pages/Gallery';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';


  const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App () {



  return <>

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/dashboard" element={ <PrivateRoute><Dashboard/></PrivateRoute>}/>




      </Routes>

      <Footer />
    </Router>



  </>

}

export default App;
