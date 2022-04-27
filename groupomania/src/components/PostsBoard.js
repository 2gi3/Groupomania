// ftd
import '../css/style.css'
import clock from "../assets/images/clock.png"
import icon8 from "../assets/images/icon8.png"
import icon9 from "../assets/images/icon9.png"
import likedImg from "../assets/images/liked-img.png"
import com from "../assets/images/com.png"

function PostsBoard() {
    return (

        <div className="col-lg-6 col-md-8 no-pd">
            <div className="main-ws-sec">
                <div className="post-topbar">
                    <div className="user-picy">
                        <img src="http://via.placeholder.com/100x100" alt="" />
                    </div>
                    <div className="post-st">
                        <ul>
                            <li><a className="post_project" href="#" title="">Post a Project</a></li>
                            <li><a className="post-jb active" href="#" title="">Post a Job X</a></li>
                        </ul>
                    </div>
                </div>
                <div className="posts-section">
                    <div className="post-bar">
                        <div className="post_topbar">
                            <div className="usy-dt">
                                <img src="http://via.placeholder.com/50x50" alt="" />
                                <div className="usy-name">
                                    <h3>John Doe</h3>
                                    <span><img src={clock} alt="clock" />3 min ago</span>
                                </div>
                            </div>
                            <div className="ed-opts">
                                <a href="http://www.example.com" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                                <ul className="ed-options">
                                    <li><a href="http://www.example.com" title="">Edit Post</a></li>
                                    <li><a href="http://www.example.com" title="">Unsaved</a></li>
                                    <li><a href="http://www.example.com" title="">Unbid</a></li>
                                    <li><a href="http://www.example.com" title="">Close</a></li>
                                    <li><a href="http://www.example.com" title="">Hide</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="epi-sec">
                            <ul className="bk-links">
                                <li><a href="http://www.example.com" title=""><i className="la la-bookmark"></i></a></li>
                                <li><a href="http://www.example.com" title=""><i className="la la-envelope"></i></a></li>
                            </ul>
                        </div>
                        <div className="job_descp">
                            <h3>Senior Wordpress Developer</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="http://www.example.com" title="">view more</a></p>
                        </div>
                        <div className="job-status-bar">
                            <ul className="like-com">
                                <li>
                                    <a href="http://www.example.com"><i className="la la-heart"></i> Like</a>
                                    <img src={likedImg} alt="" />
                                    <span>25</span>
                                </li>
                                <li><a href="http://www.example.com" title="" className="com"><img src={com} alt="" /> Comment 15</a></li>
                            </ul>
                            <a href="http://www.example.com"><i className="la la-eye"></i>Views 50</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>








    )
}

export default PostsBoard