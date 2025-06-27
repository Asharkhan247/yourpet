import React from "react";


const InnerBanner = ({title}) => {

return (<>
<section className="inner_banner"> 
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="innerbanner_cont">
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    </div>
</section>





</>)


}

export default InnerBanner;