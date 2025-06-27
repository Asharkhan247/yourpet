import React from "react";
import QuantityBar from "./QuantityBar";
import Countdown from "./Countdown";
import sale_img1 from "../assets/images/sale_img1.png";
import sale_img2 from "../assets/images/sale_img2.png";
import sale_img3 from "../assets/images/sale_img3.png";

const salesPro = [
  {
    id: 1,
    img: sale_img1,
    name: "Product name goes here 1",
    price: "99.00",
    salePrice: "79.00",
    Cutprice: "300.00",
  },
  {
    id: 2,
    img: sale_img2,
    name: "Product name goes here 2",
    price: "99.00",
    salePrice: "79.00",
    Cutprice: "300.00",
  },
    {
    id: 3,
    img: sale_img2,
    name: "Product name goes here 3",
    price: "99.00",
    salePrice: "79.00",
    Cutprice: "300.00",
  },
];

const SaleBigger = () => {
  return (
    <>
      <section className="big_sale">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="big_sale_cont">
                <a href="javascript:;" className="big_sale_btn">
                  <h4>Bigger</h4>
                  <h3>Sale</h3>
                </a>
                <h1 id="headline">Deal End In:</h1>
               <Countdown />
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                {salesPro.map((SalesItem) => (
                  <div className="col-md-4" key={SalesItem.id}>
                    <div className="big_sale_item">
                      <div className="big_sale_img">
                        <img src={sale_img1} alt="" />
                        <span>new</span>
                      </div>
                      <div className="sale_cont">
                        <ul className="sale_list">
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                          <li>
                            <i className="bx bx-star"></i>
                          </li>
                          <li>
                            <span>(5 Reviews)</span>
                          </li>
                        </ul>
                        <h3>{SalesItem.name}</h3>
                        <h4>
                          {SalesItem.salePrice}
                          <span>{SalesItem.Cutprice}</span>
                        </h4>
                        <QuantityBar />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SaleBigger;
