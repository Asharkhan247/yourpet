import React from "react";
import proimg1 from "../assets/images/pro_img1.png";
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";


const proSliderList = [
    {
        id: 1,
        proimg: proimg1,
        productBadge: "Sale",
        name: "Product name goes here 1",
        price: "79.00",
        Cutprice: "300.00", promobadge: "New",
    },
    {
        id: 2,
        proimg: proimg1,
        productBadge: "Sale",
        name: "Product name goes here 1",
        price: "79.00",
        Cutprice: "300.00", promobadge: "New",
    },
    {
        id: 3,
        proimg: proimg1,
        productBadge: "Sale",
        name: "Product name goes here 1",
        price: "79.00",
        Cutprice: "300.00", promobadge: "New"
    },

    {
        id: 4,
        proimg: proimg1,
        productBadge: "Sale",
        name: "Product name goes here 1",
        price: "79.00",
        Cutprice: "300.00", promobadge: "New",
    },



];



function ProductSlider() {


    const ratingChanged = (newRating) => {
        console.log(newRating);
    }


    const setting = {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true
    };
    return (<div>


        <div className="product_slider">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="section_title">
                            <h3>This Week’s Top Selling</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pro_slider">

                <Slider {...setting}>
                    {proSliderList.map((proList) => (
                        <a href="product.php" className="pro_items" key={proList.id}>
                            <div className="pro_card">
                                <div className="promo">
                                    {proList.promobadge}
                                </div>
                                <div className="pro_img">
                                    <img src={proList.proimg} alt="" className="img__contain" />
                                </div>
                                <div className="pro_cont">
                                    <div className="pro_rating_sec">
                                        <div className="pro_rating">
                                            <ReactStars
                                                count={5}
                                                onChange={ratingChanged}
                                                size={24}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <p className="pro_review">(5 Reviews)</p>
                                    </div>
                                    <h3 className="pro_title">{proList.name}</h3>
                                    <p className="pro_price">{proList.price}<span>{proList.Cutprice}</span></p>
                                </div>
                            </div>
                        </a>



                    ))}
                </Slider>


            </div>
        </div>





    </div>);


}

export default ProductSlider;
