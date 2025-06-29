import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerBanner from "../includes/Innerbanner";
import { Link } from "react-router-dom";



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.email === email && user?.password === password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/dashboard');
    } else {
      alert('Invalid Credentials');
    }
  };

return(<>

<InnerBanner title={'Login Now'}/>


<section className="login_sec">
    <div className="container">
        <div className="row justify-content-center login_bottom">
            <div className="col-md-5">
                <div className="login_form">
                    <h3 className="form_title">LOG IN</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <div className="form_field mb-3rem">
                                <input type="email" id="email" aria-describedby="emailHelp" name="email"
                                    placeholder="Info@Demolink.com" onChange={(e) => setEmail(e.target.value)} />
                                {/* <a href="javascript:;"><i className='bx bxs-envelope'></i></a> */}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form_field mb-4">
                                <input type="password" id="password" name="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)} />
                                {/* <a href="javascript:;"><i className='bx bx-show'></i></a> */}
                            </div>
                        </div>
                        <button type="submit" className="themebtn" onClick={handleLogin}>Log in</button>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
      
    </div>
</section>




</>);



};
export default Login; 