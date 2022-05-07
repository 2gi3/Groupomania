import '../css/style.css';
import axios from 'axios'
import React,{ useEffect, useState } from 'react';
function SignIn(){
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const[emailInvalid, setEmailInvalid] = useState('')
	const[nameWarning, setNameWarning] = useState('')
	const [passwordWarning, setPasswordWarning] = useState('')
	let UserId='';
	const re = /\S+@\S+\.\S+/g;


	
	const signup=(e)=>{
		e.preventDefault();
		console.log(userName, email, password)
		let data ={
            UserName : userName,
            UserEmail:email,
            password:password,           
        }
			
		
		if(/[^a-zA-Z]/.test(userName)){
			setNameWarning('Please make sure your name contains only letters')
		}else if(!re.test(email)){
			  setEmailInvalid(` Please provide a valid email `)			  
			}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
			      setPasswordWarning('Please provide a password that contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
				}else{	  		
		axios.post("http://localhost:3000/api/auth/signup",data)
            .then(
                (res)=>{
                    localStorage.setItem('token','token');
                    console.log('success!!');
                     
                     //clear states
                     setEmail('');
                     setPassword('');
					 let tab2 = document.getElementById('tab-2');
					 tab2.classList.remove('current');
					 let tab1 = document.getElementById('tab-1');
					 tab1.classList.add('current');                     
         
            })
            .catch((err)=>{
                            console.log(err);
            });	

	}}

	const logIn =(e)=>{
		e.preventDefault();
		// console.log( email, password)
		let data ={            
            email:email,
            password:password,       
        }
		 if(!re.test(email)){
			  setEmailInvalid(` Please provide a valid email `)			  
			}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
			      setPasswordWarning('Please provide a password that contains minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character')
				}else{		
		axios.post("http://localhost:3000/api/auth/login",data)
            .then(
                (res)=>{
                    sessionStorage.setItem("token", res.data.token)
					sessionStorage.setItem("UserId", res.data.userId)
					sessionStorage.setItem("UserName", res.data.userName)
					sessionStorage.setItem("UserEmail", res.data.userEmail)
					UserId = res.data.userId;
                    console.log(UserId);
                     
                     window.location="/";                
         
            })

            .catch((err)=>{
                            console.log(err);
            });	

	}
}

    return(
<div className="sign-in-page">
			<div className="signin-popup">
				<div className="signin-pop mx-md-5">
					<div className="row">
						{/* <div className=" col-md-6">
							<div className="cmp-info">
								<div className="cm-logo">
									<img src="images/cm-logo.png" alt="" />
									<p>Workwise,  is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
								</div>
                                <img src="images/cm-main-img.png" alt="" />			
							    </div>
                    		</div> */}
						<div className="col ">
							<div className="login-sec">
								<ul className="sign-control">
									<li data-tab="tab-1" className="current"><a href="#" title="">Sign in</a></li>				
									<li data-tab="tab-2"><a href="#" title="">Sign up</a></li>				
								</ul>			
								<div className="sign_in_sec current" id="tab-1">
									
									<h3>Sign in</h3>
									<form onSubmit={event => logIn(event)}>
										<div className="row">
											<div className="col-lg-12 no-pdd">
												<div className="sn-field">
													<input type="text" name="userEmail" placeholder="UserEmail" onChange={event => setEmail (event.target.value)} />
													<i className="la la-user"></i>
													<h1>{emailInvalid}</h1>
												</div>
                                                {/* <!--sn-field end--> */}
											</div>
											<div className="col-lg-12 no-pdd">
												<div className="sn-field">
													<input type="password" name="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />
													<i className="la la-lock"></i>
													<h1>{passwordWarning}</h1>
												</div>
											</div>
											<div className="col-lg-12 no-pdd">
												<div className="checky-sec">
													<div className="fgt-sec">
														<input type="checkbox" name="cc" id="c1" />
														<label for="c1">
															<span></span>
														</label>
														<small>Remember me</small>
													</div>
                                                    {/* <!--fgt-sec end--> */}
													<a href="#" title="">Forgot Password?</a>
												</div>
											</div>
											<div className="col-lg-12 no-pdd">
												<button type="submit" value="submit">Sign in</button>
											</div>
										</div>
									</form>
									
								</div>
                                {/* <!--sign_in_sec end--> */}
								<div className="sign_in_sec" id="tab-2">									
                                    {/* <!--signup-tab end-->	 */}
									<div className="dff-tab current" id="tab-3">
										<form onSubmit={event => signup(event)}>
											<div className="row">
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input  type="text" name="name" placeholder="Full Name" onChange={event => setUserName(event.target.value)} />
														<i className="la la-user"></i>
														<h1>{nameWarning}</h1>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="text" name="email" placeholder="email" onChange={event => setEmail(event.target.value)}/>
														<i className="la la-globe"></i>
														<h1>{emailInvalid}</h1>
													</div>
												</div>
												
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="password" name="password" placeholder="Password" onChange={event => setPassword(event.target.value)}/>
														<i className="la la-lock"></i>
														<h1>{passwordWarning}</h1>
													</div>
												</div>
												
												{/* <div className="col-lg-12 no-pdd">
													<div className="checky-sec st2">
														<div className="fgt-sec">
															<input type="checkbox" name="cc" id="c2" />
															<label for="c2">
																<span></span>
															</label>
															<small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
														</div>
													</div>
												</div> */}
												<div className="col-lg-12 no-pdd">
													<button type="submit" value="submit">Get Started</button>
												</div>
											</div>
										</form>
									</div>
                                    {/* <!--dff-tab end--> */}
									<div className="dff-tab" id="tab-4">
										<form>
											<div className="row">
												
												
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="password" name="password" placeholder="Password" />
														<i className="la la-lock"></i>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="sn-field">
														<input type="password" name="repeat-password" placeholder="Repeat Password" />
														<i className="la la-lock"></i>
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<div className="checky-sec st2">
														<div className="fgt-sec">
															<input type="checkbox" name="cc" id="c3" />
															<label for="c3">
																<span></span>
															</label>
															<small>Yes, I understand and agree to the workwise Terms & Conditions.</small>
														</div>
                                                        {/* <!--fgt-sec end--> */}
													</div>
												</div>
												<div className="col-lg-12 no-pdd">
													<button type="submit" value="submit">Get Started</button>
												</div>
											</div>
										</form>
									</div>
                                    {/* <!--dff-tab end--> */}
								</div>		
							</div>
                            {/* <!--login-sec end--> */}
						</div>
					</div>		
				</div>
                {/* <!--signin-pop end--> */}
			</div>                      
		</div>
    )
}
export default SignIn