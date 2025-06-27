import React from "react";
import storyImg from '../assets/images/story_img.png';
import videoBtnImg from '../assets/images/video_btn.png';
import sIcon1 from '../assets/images/services_icon1.png';
import sIcon2 from '../assets/images/services_icon2.png';
import sIcon3 from '../assets/images/services_icon3.png';
import sIcon4 from '../assets/images/services_icon4.png';



const Ourstory = () => {
    return (
        <div>

            <section className="ou-story">
    <div className="container">
        <div className="main_story">
            <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="story_main_cont">
                        <h3>Our Story</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="story_img">
                            <img src={storyImg} alt='' />
                            <a href="javascript:;" data-fancybox="gallery"><img src={videoBtnImg}
                                    alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="services_main">
                        <div className="services_item">
                            <div className="services_icon">
                                <img src={sIcon1} alt='' />
                            </div>
                            <div className="services_cont">
                                <h3>Our Services </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                        <div className="services_item">
                            <div className="services_icon">
                                <img src={sIcon2} alt='' />
                            </div>
                            <div className="services_cont">
                                <h3>Our Services </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                        <div className="services_item">
                            <div className="services_icon">
                                <img src={sIcon3} alt='' />
                            </div>
                            <div className="services_cont">
                                <h3>Our Services </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua</p>
                            </div>
                        </div>
                        <div className="services_item">
                            <div className="services_icon">
                                <img src={sIcon4} alt='' />
                            </div>
                            <div className="services_cont">
                                <h3>Our Services </h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua</p>
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

export default Ourstory;