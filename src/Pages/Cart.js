import React from "react";

import CartImg from '../assets/images/sub_image1.png';


const Cart = () => { return(<>



<section className="cart_product">
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                <div className="cart_main">
                    <div className="cart_table">
                        <table>
                            <tr className="cart_headings">
                                <th>
                                    <h5>Product</h5>
                                </th>
                                <th>
                                    <h5>Price</h5>
                                </th>
                                <th>
                                    <h5>Quantity</h5>
                                </th>
                                <th>
                                    <h5>Subtotal</h5>
                                </th>
                            </tr>
                            <tr className="cart_data">
                                <td className="cart_img">
                                    <div className="cart_pro_img">
                                        <a href="javascript:;"></a> <img src={CartImg} alt="" />
                                        <h5>Place Your Title Here</h5>
                                    </div>
                                </td>
                                <td>
                                    <p>$000,000.00</p>
                                </td>
                                <td>
                                    <div className="cart-icons">
                                        <button onclick="decrementValue(this)"><i
                                                className='bx bx-chevron-left'></i></button>
                                        <input type="text" value="1" />
                                        <button onclick="incrementValue(this)"><i
                                                className='bx bx-chevron-right'></i></button>
                                    </div>
                                </td>
                                <td>
                                    <div className="sub_total">
                                        <p>$000,000.00</p>
                                        <a href="javascript:;"><box-icon name='trash' ></box-icon></a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="cart_data">
                                <td className="cart_img">
                                    <div className="cart_pro_img">
                                        <a href="javascript:;"></a> <img src={CartImg} alt="" />
                                        <h5>Place Your Title Here</h5>
                                    </div>
                                </td>
                                <td>
                                    <p>$000,000.00</p>
                                </td>
                                <td>
                                    <div className="cart-icons">
                                        <button onclick="decrementValue(this)"><i
                                                className='bx bx-chevron-left'></i></button>
                                        <input type="text" value="1" />
                                        <button onclick="incrementValue(this)"><i
                                                className='bx bx-chevron-right'></i></button>
                                    </div>
                                </td>
                                <td>
                                <div className="sub_total">
                                        <p>$000,000.00</p>
                                        <a href="javascript:;"><box-icon name='trash' ></box-icon></a>
                                    </div>
                                </td>
                            </tr>
                            <tr className="cart_data">
                                <td className="cart_img">
                                    <div className="cart_pro_img">
                                        <a href="javascript:;"></a> <img src={CartImg} alt="" />
                                        <h5>Place Your Title Here</h5>
                                    </div>
                                </td>
                                <td>
                                    <p>$000,000.00</p>
                                </td>
                                <td>
                                    <div className="cart-icons">
                                        <button onclick="decrementValue(this)"><i
                                                className='bx bx-chevron-left'></i></button>
                                        <input type="text" value="1" />
                                        <button onclick="incrementValue(this)"><i
                                                className='bx bx-chevron-right'></i></button>
                                    </div>
                                </td>
                                <td>
                                <div className="sub_total">
                                        <p>$000,000.00</p>
                                        <a href="javascript:;"><box-icon name='trash' ></box-icon></a>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div> 
                </div>
            </div>
            <div className="col-md-4">
                <div className="cart_box">
                    <div className="box_heading">
                        <h3>Cart Total</h3>
                    </div>
                    <div className="price">
                        <h5>Subtotal</h5>
                        <p>$000,000.00</p>
                    </div> 
                    <div className="price">
                        <h5>Total</h5>
                        <p>$000,000.00</p>
                    </div> 
                    <div className="cart_btn">
                        <a href="checkout.php" className="themebtn btn-transparent">Check out</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>





</>);};

export default Cart; 