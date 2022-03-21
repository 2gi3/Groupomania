import '../css/style.css';

function Footer(){
    return(
        <footer>
			<div className="footy-sec mn no-margin">
				<div className="container">
					<ul>
						<li><a href="#" title="">Help Center</a></li>
						<li><a href="#" title="">Privacy Policy</a></li>
						<li><a href="#" title="">Community Guidelines</a></li>
						<li><a href="#" title="">Cookies Policy</a></li>
						<li><a href="#" title="">Career</a></li>
						<li><a href="#" title="">Forum</a></li>
						<li><a href="#" title="">Language</a></li>
						<li><a href="#" title="">Copyright Policy</a></li>
					</ul>
					<p><img src="images/copy-icon2.png" alt="" />Copyright 2018</p>
					<img className="fl-rgt" src="images/logo2.png" alt="" />
				</div>
			</div>
		</footer>
    )
}
export default Footer