import React from 'react';
import Slider from '../includes/Slider';
import Category from '../includes/Category';
import Ourstory from '../includes/Ourstory';
import Cart from '../includes/SaleBigger';   
import ProductSection from '../includes/ProductListing'; 
import FeatureProduct from '../includes/FeatureProduct';
import ProductSlider from '../includes/ProductSlider';
import Blog from '../includes/Blog';



const Home = () => {
    return (
        <div>
          <Slider/>
          <Category/>
          <Ourstory/>
          <Cart/>
          <ProductSection/>
          <FeatureProduct/>
          <ProductSlider/>
          <Blog/>
         

        </div>
    );
};

export default Home;