import '../css/style.css';
import {Fragment} from 'react';
import { Navigate} from 'react-router-dom';

function PostView(){
	if(!sessionStorage.getItem('token') ){
        
        return <Navigate to={"/signin"} />;
    }
    return(
        <Fragment>
            	
		<section className="forum-page">
			<div className="container">
				<div className="forum-questions-sec">
					<div className="row">
						<div className="col-lg-8">
							<div className="forum-post-view">
								<div className="usr-question">
									<div className="usr_img">
										<img src="http://via.placeholder.com/60x60" alt="" />
									</div>
									<div className="usr_quest">
										<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										<span><i className="fa fa-clock-o" />3 min ago</span>
										<ul className="react-links">
											<li><a href="#" title=""><i className="fa fa-heart" /> Vote 150</a></li>
											<li><a href="#" title=""><i className="fa fa-share-alt" /> Share</a></li>
										</ul>
										<ul className="quest-tags">
											<li><a href="#" title="">Work</a></li>
											<li><a href="#" title="">Php</a></li>
											<li><a href="#" title="">Design</a></li>
										</ul>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at libero elit. Mauris ultrices sed lorem nec efficitur. Donec sit amet facilisis lorem, quis facilisis tellus. Nullam mollis dignissim nisi sit amet tempor. Nullam sollicitudin neque a felis commodo gravida at sed nunc. In justo nunc, sagittis sed venenatis at, dictum vel erat. Curabitur at quam ipsum. Quisque eget nibh aliquet, imperdiet diam pharetra, dapibus lacus. Sed tincidunt sapien in dui imperdiet eleifend. Ut ut sagittis purus, non tristique elit. Quisque tincidunt metus eget ligula sodales luctus. Donec convallis ex at dui convallis malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut pretium euismod mollis. Pellentesque convallis gravida ante eu pretium. Integer rutrum mi nec purus tincidunt, nec rhoncus mauris porttitor. Donec id tellus at leo gravida egestas. Suspendisse consequat mi vel euismod efficitur. Donec sed elementum libero.</p>
										<p> Etiam rutrum ut urna eu tempus. Curabitur suscipit quis lorem vel dictum. Aliquam erat volutpat. Pellentesque volutpat viverra pulvinar. Mauris ac sapien ac metus tincidunt volutpat eu eu purus. Suspendisse pharetra quis quam id auctor. Pellentesque feugiat venenatis urna, vitae suscipit enim volutpat vitae. Nunc egestas tortor est, at sodales ligula auctor efficitur.</p>
										<div className="comment-section">
											<h3>03 Comments</h3>
											<div className="comment-sec">
												<ul>
													<li>
														<div className="comment-list">
															<div className="bg-img">
																<img src="http://via.placeholder.com/40x40" alt="" />
															</div>
															<div className="comment">
																<h3>John Smith</h3>
																<span><img src="images/clock.png" alt="" /> 3 min ago</span>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at libero elit. Mauris ultrices sed lorem nec efficitur.</p>
															</div>
														</div>
                                                        {/* <!--comment-list end--> */}
													</li>
													<li>
														<div className="comment-list">
															<div className="bg-img">
																<img src="http://via.placeholder.com/40x40" alt="" />
															</div>
															<div className="comment">
																<h3>John Doe</h3>
																<span><img src="images/clock.png" alt="" /> 3 min ago</span>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
															</div>
														</div>
                                                        {/* <!--comment-list end--> */}
													</li>
													<li>
														<div className="comment-list">
															<div className="bg-img">
																<img src="http://via.placeholder.com/40x40" alt="" />
															</div>
															<div className="comment">
																<h3>John Doe</h3>
																<span><img src="images/clock.png" alt="" /> 3 min ago</span>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at.</p>
															</div>
														</div>
                                                        {/* <!--comment-list end--> */}
													</li>
												</ul>
											</div>
                                            {/* <!--comment-sec end--> */}
										</div>
									</div>
                                    {/* <!--usr_quest end--> */}
								</div>
                                {/* <!--usr-question end--> */}
							</div>
                            {/* <!--forum-post-view end--> */}
							<div className="post-comment-box">
								<h3>03 Comments</h3>
								<div className="user-poster">
									<div className="usr-post-img">
										<img src="http://via.placeholder.com/40x40" alt="" />
									</div>
									<div className="post_comment_sec">
										<form>
											<textarea placeholder="Your Answer"></textarea>
											<button type="submit">Post Answer</button>
										</form>
									</div>
                                    {/* <!--post_comment_sec end--> */}
								</div>
                                {/* <!--user-poster end--> */}
							</div>
                            {/* <!--post-comment-box end--> */}
							<div className="next-prev">
								<a href="#" title="" className="fl-left">Preview</a>
								<a href="#" title="" className="fl-right">Next</a>
							</div>
                            {/* <!--next-prev end--> */}
						</div>						
					</div>
				</div>
                {/* <!--forum-questions-sec end--> */}
			</div>
		</section>
       

		<div className="overview-box" id="question-box">
			<div className="overview-edit">
				<h3>Ask a Question</h3>
				<form>
					<input type="text" name="question" placeholder="Type Question Here" />
					<input type="text" name="tags" placeholder="Tags" />
					<textarea placeholder="Description"></textarea>
					<button type="submit" className="save">Submit</button>
					<button type="submit" className="cancel">Cancel</button>
				</form>
				<a href="#" title="" className="close-box"><i className="la la-close" /></a>
			</div>
            {/* <!--overview-edit end--> */}
		</div>
        {/* <!--overview-box end--> */}
        

        </Fragment>

    )
}
export default PostView
