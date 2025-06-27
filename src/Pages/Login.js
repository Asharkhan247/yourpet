import React from "react";
import InnerBanner from "../includes/Innerbanner";


const Login = () => {

return(<>

<InnerBanner title={'Login Now'}/>


<section className="login_sec">
    <div className="container">
        <div className="row justify-content-center login_bottom">
            <div className="col-md-5">
                <div className="login_form">
                    <h3 className="form_title">LOG IN</h3>
                    <form action="checklogin.php" method="post">
                        <div className="form-group">
                            <div className="form_field mb-3rem">
                                <input type="email" id="email" aria-describedby="emailHelp" name="email"
                                    placeholder="Info@Demolink.com" />
                                <a href="javascript:;"><i className='bx bxs-envelope'></i></a>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form_field mb-4">
                                <input type="password" id="password" name="password" placeholder="*********" />
                                <a href="javascript:;"><i className='bx bx-show'></i></a>
                            </div>
                        </div>
                        <button type="submit" className="themebtn">Log in</button>
                        <p>Don't have an account? <a href="javascript:;">Sign Up</a></p>
                    </form>
                </div>
            </div>
        </div>
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="login_form">
                    <h3 className="form_title">SIGN UP</h3>
                    <form action="checklogin.php" method="post">
                        <div className="form-group">
                            <label for="">Name</label>
                            <div className="form_field">
                                <input type="text" id="name" aria-describedby="NameHelp" name="name"
                                    placeholder="Info@Demolink.com" /> 
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="">Email</label>
                            <div className="form_field">
                                <input type="email" id="email" aria-describedby="emailHelp" name="email"
                                    placeholder="Info@Demolink.com" /> 
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="">Pasword</label>
                            <div className="form_field mb-4">
                                <input type="password" id="password" name="password" placeholder="*********" />
                                <a href="javascript:;"><i className='bx bx-show'></i></a>
                            </div>
                        </div>
                        <button type="submit" className="themebtn">sign up</button> 
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>




</>);



};
export default Login; 