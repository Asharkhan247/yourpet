import React from "react";

import contactImg from '../assets/images/contact_img.png';

const Contact = () => {return(<>


<section className="contact">
    <div className="container">
        <div className="contact__main">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="contact_image">
                        <img src={contactImg} alt="" className="img__cover" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="contact_cont">
                        <h3 className="contact_title">Contact Informations:</h3>
                        <p className="contact_text">SAY SOMETHING TO START A LIVE CHAT!</p>
                        <form action="" className="contact_form">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="First name:" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="Last Name:" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="Email:" />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="Phone Number:" />
                                </div>
                                <div className="col-md-12">
                                    <textarea name="" id="" placeholder="Message..."></textarea>
                                    <div className="contact__bt">
                                        <a href="" className="themebtn">SEND MESSAGE</a>
                                        <a href=""><i className='bx bxs-envelope'></i><span>Info@Demolink.com</span></a>
                                        <a href=""><i className='bx bxs-phone-incoming'></i><span>(123)456-7890</span></a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>






</>)};

export default Contact;