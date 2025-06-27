import React from "react";
import proimg1 from "../assets/images/sale_img1.png";
import proimg2 from "../assets/images/sale_img2.png";
import proimg3 from "../assets/images/sale_img3.png";


const ProductListing = [
{
id:1,
proimg:proimg1,
productBadge:"Sale",
name:"Product name goes here 1",
price:"79.00",
Cutprice:"300.00"

},
{
id:2,
proimg:proimg2,
productBadge:"Sale",
name:"Product name goes here 1",
price:"79.00",
Cutprice:"300.00"

},
{
id:3,
proimg:proimg3,
productBadge:"Sale",
name:"Product name goes here 1",
price:"79.00",
Cutprice:"300.00"

},
{
id:4,
proimg:proimg1,
productBadge:"Sale",
name:"Product name goes here 1",
price:"79.00",
Cutprice:"300.00"

},
{
id:5,
proimg:proimg2,
productBadge:"Sale",
name:"Product name goes here 1",
price:"79.00",
Cutprice:"300.00"

},

{
id:6,
proimg:proimg3,
productBadge:"Sale",
name:"Product name goes here 1",
price:"79.00",
Cutprice:"300.00"

},


{
id:7,
proimg:proimg1,
productBadge:"Sale",
name:"Product name goes here 1",
price:"79.00",
Cutprice:"300.00"

},

  
]



const ProductSection = () => {




return (
<>

<section className="explore_products">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="section_title text-center mb-5">
                    <h3>Explore Our Products</h3>
                </div>
            </div>
        </div>

        <div className="row">
           
           
           {ProductListing.map((productItems) => (

  <div className="col-md-3" key={productItems.id}>
                <a href="product.php" className="big_sale_item mb-4">
                    <div className="big_sale_img">
                        <img src={productItems.proimg} alt="" />
                        <span>{productItems.productBadge}</span>
                    </div>
                    <div className="sale_cont">
                        <ul className="sale_list">
                            <li><i className='bx bx-star'></i></li>
                            <li><i className='bx bx-star'></i></li>
                            <li><i className='bx bx-star'></i></li>
                            <li><i className='bx bx-star'></i></li>
                            <li><i className='bx bx-star'></i></li>
                            <li><span>(5 Reviews)</span></li>
                        </ul>
                        <h3>{productItems.name}</h3>
                        <h4>{productItems.price}<span>{productItems.cutPrice}</span></h4>
                    </div>
                </a>
            </div>



           ))}
           
           
           
           
           
           
           
          
            
        </div>

        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="explore_productsbtn text-center mt-3">
                    <a href="product.php" className="themebtn">view all products <i className='bx bx-right-arrow-alt'></i></a>
                </div>
            </div>
        </div>

    </div>
</section>


</>



);





}

export default ProductSection;