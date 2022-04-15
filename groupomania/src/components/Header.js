import '../css/style.css'
import logo from '../assets/Groupomania_Logos/icon-left-font-monochrome-white.webp'
import icon1 from "../assets/images/icon1.png" 
import icon2 from "../assets/images/icon2.png"
import icon3 from "../assets/images/icon3.png"
import icon4 from "../assets/images/icon4.png"
import icon5 from "../assets/images/icon5.png"
import icon6 from "../assets/images/icon6.png"
import icon7 from "../assets/images/icon7.png"

import { Link} from 'react-router-dom'
import axios from 'axios'

function Header (){
    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target['my_input'].value)
    }
	function logOut(){
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('UserId');
		window.location="/";
	}
	
	const deleteUser=()=>{
		const userId = sessionStorage.getItem('UserId'); 
		axios.delete(`http://localhost:3000/api/auth/${userId}`, {
			headers: {
			//   Authorization: authorizationToken
			},
			data: {            
				// UserName : userName,
                // UserEmail:email,
                // password:password,         
			}
		  });
		 logOut();
	}
    return ( 
        <div className="container-fluid">
				<div className="header-data">
					<div className="logo">
						<a href="index.html" title=""><img src={logo} width="150" alt="" /></a>
					</div>
                    {/* <!--logo end--> */}
					{/* <div className="search-bar">
						<form>
							<input type="text" name="search" placeholder="Search..." />
							<button type="submit"><i className="la la-search"></i></button>
						</form>
					</div> */}
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
							<li>
								<Link to='signin'>
									<span><img src={icon5} alt="" /></span>
									Sign in
								</Link>
							</li>	
							  <button onClick={logOut}>Log out</button>	
							<li>
							</li>	
							  <button onClick={deleteUser}>Delete User</button>
							<li>
							</li>					
						</ul>
					</nav>
                    {/* <!--nav end--> */}
					<div className="menu-btn">
						<a href="#" title=""><i className="fa fa-bars"></i></a>
					</div>
                    {/* <!--menu-btn end--> */}
					{/* <div>
					<button onClick={logOut}>Log out</button>	
					</div>
					<div>
						<button onClick={deleteUser}>Delete User</button>
					</div> */}
					
				</div>
              
			</div>
    
    )
}

export default Header;