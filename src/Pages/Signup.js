import React, { useState } from 'react';
import InnerBanner from "../includes/Innerbanner";



const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    localStorage.setItem('user', JSON.stringify({ email, password }));
    alert('Signup Successful');
  };

return(<>

<InnerBanner title={'Signup'}/>


<section className="login_sec">
    <div className="container">
      
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="login_form">
                    <h3 className="form_title">SIGN UP</h3>
                    <form onSubmit={handleSignup}>
                   
                        <div className="form-group">
                            <label for="">Email</label>
                            <div className="form_field">
                                <input type="email" id="email" aria-describedby="emailHelp" name="email"
                                    placeholder="Info@Demolink.com" onChange={(e) => setEmail(e.target.value)} /> 
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="">Pasword</label>
                            <div className="form_field mb-4">
                                <input type="password" id="password" name="password" placeholder="*********"  onChange={(e) => setPassword(e.target.value)}/>
                           
                            </div>
                        </div>
                        <button type="submit" className="themebtn" onClick={handleSignup}>sign up</button> 
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>




</>);



};
export default Signup; 