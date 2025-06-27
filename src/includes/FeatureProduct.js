import React from "react";
import FeatureProductImg1 from "../assets/images/feaut_img1.png";
import FeatureProductImg2 from "../assets/images/feaut_img2.png";


const FeatureProduct = () => {
    return (
        <div>
      <section className="feautrued_product">
    <div className="container">
        <div className="feat_pro__main">
            <div className="row">
                <div className="col-md-4">
                    <div className="feauPro_crd">
                        <h3 className="title">Dog Food <br/>
                            <span>UP TO 30% OFF</span>
                        </h3>
                        <div className="feaut__bt">
                            <a href="product.php" className="themebtn">Shop Now<i className='bx bx-chevron-right'></i></a>
                        </div>
                        <div className="feau_image">
                            <img src={FeatureProductImg1} alt="" className="img__contain" />
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="feauPro_crd feauPro_crd_green">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="title title2">Cat Food <br/>
                                    <span>UP TO 50% OFF</span>
                                </h3>
                                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                <div className="feaut__bt">
                                    <a href="product.php" className="themebtn">Shop Now<i className='bx bx-chevron-right'></i></a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feau_image feau_image2">
                                    <img src={FeatureProductImg2} alt="" className="img__contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default FeatureProduct;

