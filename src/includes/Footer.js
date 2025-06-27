import React from "react";
import footerbg from '../assets/images/footer_bg.png';
import cartImg from '../assets/images/copy_cart.png';


const Footer = () => {

return (<>     

<footer className="footer">
    <div className="footer_bg">
        <img src={footerbg} alt=''/>
    </div>
    <div className="container">
        <div className="footer__main">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer_items">
                        <h3 className="foo_title foo_title2">Take your pet to Dinner</h3>
                        <p className="text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <ul className="foo_icon">
                            <li><a href="javascript:;"><box-icon type='logo' name='facebook'></box-icon></a></li>
                            <li><a href="javascript:;"><box-icon name='instagram' type='logo' ></box-icon></a></li>
                            <li><a href="javascript:;"><box-icon name='tiktok' type='logo' ></box-icon></a></li>
                            <li><a href="javascript:;"><box-icon name='twitter' type='logo' ></box-icon></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="footer_items">
                                <h3 className="foo_title">Quick Link</h3>
                                <ul className="foo_list">
                                    <li><a href="index.php">Home</a></li>
                                    <li><a href="about.php">About Us</a></li>
                                    <li><a href="product.php">Products</a></li>
                                    <li><a href="gallery.php">Gallery</a></li>
                                    <li><a href="blog.php">Blog</a></li>
                                    <li><a href="contact.php">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_items">
                                <h3 className="foo_title">Other Links</h3>
                                <ul className="foo_list">
                                <li><a href="index.php">Home</a></li>
                                    <li><a href="about.php">About Us</a></li>
                                    <li><a href="product.php">Products</a></li>
                                    <li><a href="gallery.php">Gallery</a></li>
                                    <li><a href="blog.php">Blog</a></li>
                                    <li><a href="contact.php">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_items">
                                <h3 className="foo_title">Useful Links</h3>
                                <ul className="foo_list">
                                <li><a href="index.php">Home</a></li>
                                    <li><a href="about.php">About Us</a></li>
                                    <li><a href="product.php">Products</a></li>
                                    <li><a href="gallery.php">Gallery</a></li>
                                    <li><a href="blog.php">Blog</a></li>
                                    <li><a href="contact.php">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="footer_items">
                                <h3 className="foo_title">Contact Info</h3>
                                <ul className="foo_list foo_list2">
                                    <li><a href="mailto:Info@Demolink.com"><i className='bx bxs-envelope'></i>Email: <br/>
                                            Info@Demolink.com</a></li>
                                    <li><a href="tel:1234567890"><i className='bx bxs-phone-call'></i>Phone: <br/>
                                            (123) 456-7890</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="copy__main">
                        <p>Copyright © 2024 Demolink. - All Right Reserved.</p>
                        <div className="copy_cart">
                            <img src={cartImg} alt="" className="img__contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>




</>);



}

export default Footer;