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
		sessionStorage.removeItem('UserName');
	    sessionStorage.removeItem('UserEmail');
		window.location="/";
	}
	
    return ( 
        <div className="container-fluid">
				 <nav className="navbar navbar-expand-md navbar-dark">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              <Link className="nav-link"  to='/'>
				<span><img src={icon1} alt="" /></span> Home
		     </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to='viewprofile'>
					<span><img src={icon3} alt="" /></span>Prfile
			  </Link>
              </li>
			  <li className="nav-item">
                  <Link className="nav-link" to='signin'>
					<span><img src={icon5} alt="" /></span>Sign in
				</Link>
              </li>
              
          </ul>
      </div>
      <div className="mx-auto order-0">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
              <span className="navbar-toggler-icon"></span>
			  <a className="navbar-brand mx-auto" href="#">Nav</a>
          </button>
      </div>
	  <div className="logo">
						<a href="index.html" title=""><img src={logo} width="150" alt="" /></a>
					</div>
	  
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
			  <li className="nav-item">
			  <button onClick={logOut}>Log out</button>
              </li>
          </ul>
      </div>
  </nav>
              
			</div>
    
    )
}

export default Header;