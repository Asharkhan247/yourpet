import react from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useState } from "react";



const Header = () => {

  const [showDiv, setShowDiv] = useState(false);
  const handleClick = () => {
    setShowDiv(!showDiv); }



  return (
    <div>

      {showDiv && ( 

        <div className="search_bar active">
        <form action="">
            <input type="text" placeholder="Search Here" />
            <button type="submit"><box-icon name='search' ></box-icon></button>
        </form>
        <a href="javascript:;" onClick={handleClick} className="search_close"><box-icon name='x'></box-icon></a>
        </div>

      )}

      
      <header className="header">
        <div className="top_header">
          <div className="container">
            <div className="top_bar">
              <div className="top_contact">
                <Link href="tel:1234567890">
                  <box-icon type='solid' name='phone-call'></box-icon> Call Us On: (123) 456-7890
                </Link>
                <Link href="mailto:Info@Demolink.com">
                  <box-icon name='envelope' ></box-icon>
                  Email: Info@Demolink.com
                </Link>
              </div>
              <div className="myaccount">
                <select name="lang" id="">
                  <option value="1" disabled selected>
                    my account
                  </option>
                  <option value="2">my account</option>
                </select>
                <select name="lang" id="">
                  <option value="1" disabled selected>
                    english
                  </option>
                  <option value="2">english</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header-main">
            <Link to="/" className="header__logo">
              <img src={logo} alt="Logo" className="imgFluid" />
            </Link>
            <ul className="header-main__nav">
              <li>
                <Link to="/" className={({isActive}) => (isActive ? "active" : "")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="header_btn">
              <Link onClick={handleClick} className="shop">
                <box-icon name='search-alt-2'></box-icon> Search
              </Link>
              <Link to="/cart" className="shop">
                <box-icon name='cart' ></box-icon> Cart
              </Link>   
              <Link to="/login" className="themebtn">
                Log in <box-icon name='chevron-right' ></box-icon>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
