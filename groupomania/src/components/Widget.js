import '../css/style.css'
import wdLogo from "../assets/images/wd-logo.png"

function Widget() {
    return (
        <div className="col-lg-3 pd-right-none no-pd">
            <div className="right-sidebar">
                <div className="widget widget-about">
                    <img height="100" src={wdLogo} alt="logo" />
                    <h3>Track Time on Groupware</h3>
                    <span>Pay only for the Hours worked</span>
                    <div className="sign_link">
                        <h3><a href="http://www.example.com" title="">Sign up</a></h3>
                        <a href="http://www.example.com" title="">Learn More</a>
                    </div>
                </div>
                {/* <!--widget-about end--> */}

            </div>
            {/* <!--right-sidebar end--> */}
        </div>
    )

}

export default Widget