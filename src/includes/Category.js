import react from "react";
import CategoryImg1 from "../assets/images/category-1.png";
import CategoryImg2 from "../assets/images/category-2.png";



const Category = () => {
    return (
        <div>
            
            <section className="explore_category">
    <div className="container">
        <div className="row justify-content-between mb-5">
            <div className="col-md-4">
                <div className="section_title">
                    <h3>Explore By Category</h3>
                </div>
            </div>
            <div className="col-md-2">
                <div className="section_btn">
                    <a href="product.php" className="themebtn btn-transparent">View Products 
                        <box-icon name='chevron-right' ></box-icon></a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6">
                <a href="product.php" className="category_item item1">
                    <div className="category_img">
                        <img src={CategoryImg1} alt=""/>
                    </div>
                    <div className="category_cont">
                        <h4>Dog</h4>
                        <p>4 Items</p>
                        <span>Comming Soon</span>
                    </div>
                </a>
            </div>
            <div className="col-md-6">
                <a href="product.php" className="category_item item2">
                    <div className="category_img">
                        <img src={CategoryImg2} alt="" />
                    </div>
                    <div className="category_cont">
                        <h4>Cat</h4>
                        <p>8 Items</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
</section>




        </div>
    );
};

export default Category;