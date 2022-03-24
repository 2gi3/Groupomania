import '../css/style.css'
import logo from '../assets/images/logo.png'
import icon1 from "../assets/images/icon1.png" 
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import icon4 from "../assets/images/icon4.png"
import icon5 from "../assets/images/icon5.png"
import icon6 from "../assets/images/icon6.png"
import icon7 from "../assets/images/icon7.png"

import { Link} from 'react-router-dom'

function Header (){
    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target['my_input'].value)
    }
    return ( 
        <div className="container-fluid">
				<div className="header-data">
					<div className="logo">
						<a href="index.html" title=""><img src={logo} alt="" /></a>
					</div>
                    {/* <!--logo end--> */}
					<div className="search-bar">
						<form>
							<input type="text" name="search" placeholder="Search..." />
							<button type="submit"><i className="la la-search"></i></button>
						</form>
					</div>
                    {/* <!--search-bar end--> */}
					<nav>
						<ul>
							<li>
								<Link to='/'>
									<span><img src={icon1} alt="" /></span>
									Home
								</Link>
							</li>
							
							<li>
								<Link to='viewprofile'>
									<span><img src={icon3} alt="" /></span>
									Prfile
								</Link>
							</li>
							<li>
								<Link to='postview'>
									<span><img src={icon4} alt="" /></span>
									View post
								</Link>
								
							</li>
							<li>
								<Link to='editpost'>
									<span><img src={icon5} alt="" /></span>
									edit post
								</Link>
							</li>
							
						</ul>
					</nav>
                    {/* <!--nav end--> */}
					<div className="menu-btn">
						<a href="#" title=""><i className="fa fa-bars"></i></a>
					</div>
                    {/* <!--menu-btn end--> */}
					<div className="user-account">
						<div className="user-info">
							<img src="http://via.placeholder.com/30x30" alt="" />
							<a href="#" title="">John</a>
							<i className="la la-sort-down"></i>
						</div>
						<div className="user-account-settingss">
							<h3>Online Status</h3>
							<ul className="on-off-status">
								<li>
									<div className="fgt-sec">
										<input type="radio" name="cc" id="c5" />
										<label htmlFor="c5">
											<span></span>
										</label>
										<small>Online</small>
									</div>
								</li>
								<li>
									<div className="fgt-sec">
										<input type="radio" name="cc" id="c6" />
										<label htmlFor="c6">
											<span></span>
										</label>
										<small>Offline</small>
									</div>
								</li>
							</ul>
							<h3>Custom Status</h3>
							<div className="search_form">
								<form>
									<input type="text" name="search" />
									<button type="submit">Ok</button>
								</form>
							</div>
                            {/* <!--search_form end--> */}
							<h3>Setting</h3>
							<ul className="us-links">
								<li><a href="profile-account-setting.html" title="">Account Setting</a></li>
								<li><a href="#" title="">Privacy</a></li>
								<li><a href="#" title="">Faqs</a></li>
								<li><a href="#" title="">Terms & Conditions</a></li>
							</ul>
							<h3 className="tc"><a href="sign-in.html" title="">Logout</a></h3>
						</div>
                        {/* <!--user-account-settingss end--> */}
					</div>
				</div>
                {/* <!--header-data end--> */}
			</div>
    
    )
}

export default Header;