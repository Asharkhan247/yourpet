
import bannerIMg from "../assets/images/banner.png";


function Slider() {
    return (
        <>

        <section className="home_banner">
    <div className="banner_img">
        <img src={bannerIMg} alt="" />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="banner_cont">
                    <h6>Welcome To Our Website! </h6>
                    <h3>Bring fine dinning for
                        your pet to your home</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua</p>
                    <div className="banner_btn">
                        <a href="product.php" className="themebtn">View Products <box-icon name='chevron-right' ></box-icon></a>
                        <a href="contact.php" className="themebtn btn-transparent">Contact Us <box-icon name='chevron-right' ></box-icon></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </>
    )
}    
export default Slider;