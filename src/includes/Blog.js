import React from "react";
import blogImg1 from '../assets/images/blog_img1.png';
import blogImg2 from '../assets/images/blog_img2.png';
import blogImg3 from '../assets/images/blog_img3.png';

const BlogListmain = [

    { id: 1, blogImg: blogImg1, blogdate: new Date().toLocaleDateString(), title: "HeadingLorem ipsum dolor sit amet, consectetur", describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", },
    { id: 2, blogImg: blogImg2, blogdate: new Date().toLocaleDateString(), title: "HeadingLorem ipsum dolor sit amet, consectetur", describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", },

    { id: 3, blogImg: blogImg3, blogdate: new Date().toLocaleDateString(), title: "HeadingLorem ipsum dolor sit amet, consectetur", describtion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", },






];



const Blog = () => {

    return (<div>


        <section className="blog">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-4">
                        <div className="section_title text-center">
                            <h3>Explore Our Blogs</h3>
                        </div>
                    </div>
                </div>






                <div className="blog__main">
                    <div className="row">
                        {BlogListmain.map((BlogBox) => (
                            <div className="col-md-4" key={BlogBox.id}>
                                <div className="blog_card">
                                    <div className="blog_img">
                                        <img src={BlogBox.blogImg} alt="" className="img__cover" />
                                    </div>
                                    <div className="blog_cont">
                                        <div className="blog_date"><i className='bx bx-time-five'></i>{BlogBox.blogdate}</div>
                                        <h3 className="blog_title">{BlogBox.title}</h3>
                                        <p className="blog_text">{BlogBox.describtion}</p>
                                        <div className="blog__bt">
                                            <a href="blog.php" className="themebtn">Read More <box-icon name='chevron-right' ></box-icon></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </section>







    </div>)



}

export default Blog;