import logo from '../../../HTML/images/logo'
import '../css/style.css'


function Header (){
    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target['my_input'].value)
    }
    return ( <header>
        <div className="container">
            <div className="header-data">
                <div className="logo">
                    <a  href='http://www.example.com' title='Notitle'>
                        <img height="50" src={logo} alt="" />
                    </a>;
                </div>
                {/* <!--logo end--> */}
                <div className="search-bar">
                  <form onSubmit={handleSubmit}>
                    <input type='text' name='search' defaultValue='Search...' />
                    <button type='submit'><i class="la la-search"></i></button>
                  </form>
                </div>
                {/* <!--search-bar end--> */}
                <nav>
                    <ul>
                        <li>
                            <a href="index.html" title="">
                                <span><img src="images/icon1.png" alt="" /></span>
                                Home
                            </a>
                        </li>
                    
                    </ul>
                </nav>
                {/* <!--nav end--> */}
                <div className="menu-btn">
                    <a href='http://www.example.com' title=""><i className="fa fa-bars"></i></a>
                </div>
                {/* <!--menu-btn end--> */}
                <div className="user-account">
                    <div className="user-info">
                        <img src="http://via.placeholder.com/30x30" alt="" />
                        <a className='nav-link' href='http://www.example.com'>Welcome to the Web</a>;
                        <i className="la la-sort-down"></i>
                    </div>
                    <div className="user-account-settingss">
                        <h3>Online Status</h3>
                        <ul className="on-off-status">
                            <li>
                                <div className="fgt-sec">
                                    {/* <input type="radio" name="cc" id="c5"> */}
                                    <label for="c5">
                                        <span></span>
                                    </label>
                                    <small>Online</small>
                                </div>
                            </li>
                            <li>
                                <div className="fgt-sec">
                                    {/* <input type="radio" name="cc" id="c6"> */}
                                    <label for="c6">
                                        <span></span>
                                    </label>
                                    <small>Offline</small>
                                </div>
                            </li>
                        </ul>
                        <h3>Custom Status</h3>
                        <div className="search_form">
                            <form>
                                {/* <input type="text" name="search"> */}
                                <button type="submit">Ok</button>
                            </form>
                        </div>
                        {/* <!--search_form end--> */}
                        <h3>Setting</h3>
                        <ul className="us-links">
                            <li><a href="profile-account-setting.html" title="">Account Setting</a></li>
                            <li><a href='http://www.example.com' title="">Privacy</a></li>
                            <li><a href='http://www.example.com' title="">Faqs</a></li>
                            <li><a href='http://www.example.com' title="">Terms & Conditions</a></li>
                        </ul>
                        <h3 className="tc"><a href='http://www.example.com' title="">Logout</a></h3>
                    </div>
                    {/* <!--user-account-settingss end--> */}
                </div>
            </div>
            {/* <!--header-data end--> */}
        </div>
    </header>
    )
}

export default Header;