import React from "react";
import InnerBanner from "../includes/Innerbanner";
import gImage1 from "../assets/images/gallery1.png";
import gImage2 from "../assets/images/gallery2.png";
import gImage3 from "../assets/images/gallery3.png";
import gImage4 from "../assets/images/gallery4.png";
import gImage5 from "../assets/images/gallery5.png";
import gImage6 from "../assets/images/gallery6.png";
import gImage7 from "../assets/images/gallery7.png";
import gImage8 from "../assets/images/gallery8.png";



const GalleryList = [
    { id:1,gImage: gImage1, },
    { id:2,gImage: gImage2, },
    { id:3,gImage: gImage3, },
    { id:4,gImage: gImage4, },
    { id:5,gImage: gImage5, },
      { id:6,gImage: gImage6, },
        { id:7,gImage: gImage7, },
          { id:8,gImage: gImage8, },


];




const Gallery = () => {

    return (<>
        <InnerBanner title={'Gallery'} />


        <section className="gallery">
            <div className="container">
                <div className="row">
                   
                   
                   {GalleryList.map((galleryBox) => (

      <div className="col-md-3" key={galleryBox.id}>
                        <a href={galleryBox.gImage} data-fancybox="gallery" className="gallery_item">
                            <img src={galleryBox.gImage} alt='' />
                        </a>
                    
                    </div>

                   ) )}
                   
                   
                   
              
                </div>
            </div>
        </section>







    </>)








};

export default Gallery;