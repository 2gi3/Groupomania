import '../css/style.css'
import cmLogo from "../assets/images/cm-logo.png"
import cp from "../assets/images/cp.png"

function ProfileBox(){
    return (<div className="col-lg-3 col-md-4 pd-left-none no-pd">
        <div className="main-left-sidebar no-margin">
            <div className="user-data full-width">
                <div className="user-profile">
                    <div className="username-dt">
                        <div className="usr-pic">
                            <img src="http://via.placeholder.com/100x100" alt="" />
                        </div>
                    </div>
                    {/* <!--username-dt end--> */}
                    <div className="user-specs">
                        <h3>John Doe</h3>
                        <span>Graphic Designer at Self Employed</span>
                    </div>
                </div>
                {/* <!--user-profile end--> */}
                <ul className="user-fw-status">
                    <li>
                        <h4>Following</h4>
                        <span>34</span>
                    </li>
                    <li>
                        <h4>Followers</h4>
                        <span>155</span>
                    </li>
                    <li>
                        <a href="http://www.example.com" title="">View Profile</a>
                    </li>
                </ul>
            </div>
            {/* <!--user-data end--> */}

            <div className="tags-sec full-width">
                <ul>
                    <li><a href="http://www.example.com" title="">Help Center</a></li>
                    <li><a href="http://www.example.com" title="">About</a></li>
                    <li><a href="http://www.example.com" title="">Privacy Policy</a></li>
                    <li><a href="http://www.example.com" title="">Community Guidelines</a></li>
                    <li><a href="http://www.example.com" title="">Cookies Policy</a></li>
                    <li><a href="http://www.example.com" title="">Career</a></li>
                    <li><a href="http://www.example.com" title="">Language</a></li>
                    <li><a href="http://www.example.com" title="">Copyright Policy</a></li>
                </ul>
                <div className="cp-sec">
                    <img height="70" src={cmLogo} alt="" />
                        <p><img src={cp} alt="" />Copyright 2018</p>
                </div>
            </div>
            {/* <!--tags-sec end--> */}
        </div>
        {/* <!--main-left-sidebar end--> */}
    </div>


    )

}

export default ProfileBox