import '../css/style.css';
import { Fragment } from 'react';

function MyProfileFeed(){
    return(<Fragment>
        <section className="cover-sec">
			<img src="http://via.placeholder.com/1600x400" alt="" />
			<a href="#" title=""><i className="fa fa-camera"></i> Change Image</a>
		</section>


		<main>
			<div className="main-section">
				<div className="container">
					<div className="main-section-data">
						<div className="row">
							<div className="col-lg-3">
								<div className="main-left-sidebar">
									<div className="user_profile">
										<div className="user-pro-img">
											<img src="http://via.placeholder.com/170x170" alt="" />
											<a href="#" title=""><i className="fa fa-camera"></i></a>
										</div>
                                        {/* {<!--user-pro-img end--> */} 
										<div className="user_pro_status">
											<ul className="flw-hr">
												<li><a href="#" title="" className="flww"><i className="la la-plus"></i> Follow</a></li>
												<li><a href="#" title="" className="hre">Hire</a></li>
											</ul>
											<ul className="flw-status">
												<li>
													<span>Following</span>
													<b>34</b>
												</li>
												<li>
													<span>Followers</span>
													<b>155</b>
												</li>
											</ul>
										</div>
                                        {/* {<!--user_pro_status end--> */} 
										<ul className="social_links">
											<li><a href="#" title=""><i className="la la-globe"></i> www.example.com</a></li>
											<li><a href="#" title=""><i className="fa fa-facebook-square"></i> Http://www.facebook.com/john...</a></li>
											<li><a href="#" title=""><i className="fa fa-twitter"></i> Http://www.Twitter.com/john...</a></li>
											<li><a href="#" title=""><i className="fa fa-google-plus-square"></i> Http://www.googleplus.com/john...</a></li>
											<li><a href="#" title=""><i className="fa fa-behance-square"></i> Http://www.behance.com/john...</a></li>
											<li><a href="#" title=""><i className="fa fa-pinterest"></i> Http://www.pinterest.com/john...</a></li>
											<li><a href="#" title=""><i className="fa fa-instagram"></i> Http://www.instagram.com/john...</a></li>
											<li><a href="#" title=""><i className="fa fa-youtube"></i> Http://www.youtube.com/john...</a></li>
										</ul>
									</div>
                                    {/* {<!--user_profile end--> */} 
									<div className="suggestions full-width">
										<div className="sd-title">
											<h3>People Viewed Profile</h3>
											<i className="la la-ellipsis-v"></i>
										</div>
                                        {/* {<!--sd-title end--> */} 
										<div className="suggestions-list">
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>Jessica William</h4>
													<span>Graphic Designer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>John Doe</h4>
													<span>PHP Developer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>Poonam</h4>
													<span>Wordpress Developer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>Bill Gates</h4>
													<span>C & C++ Developer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>Jessica William</h4>
													<span>Graphic Designer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>John Doe</h4>
													<span>PHP Developer</span>
												</div>
												<span><i className="la la-plus"></i></span>
											</div>
											<div className="view-more">
												<a href="#" title="">View More</a>
											</div>
										</div>
                                        {/* {<!--suggestions-list end--> */} 
									</div>
                                    {/* {<!--suggestions end--> */} 
								</div>
                                {/* {<!--main-left-sidebar end--> */} 
							</div>
							<div className="col-lg-6">
								<div className="main-ws-sec">
									<div className="user-tab-sec">
										<h3>John Doe</h3>
										<div className="star-descp">
											<span>Graphic Designer at Self Employed</span>
											<ul>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star"></i></li>
												<li><i className="fa fa-star-half-o"></i></li>
											</ul>
											<a href="#" title="">Status</a>
										</div>
                                        {/* {<!--star-descp end--> */} 
										<div className="tab-feed st2">
											<ul>
												<li data-tab="feed-dd" className="active">
													<a href="#" title="">
														<img src="images/ic1.png" alt="" />
														<span>Feed</span>
													</a>
												</li>
												<li data-tab="info-dd">
													<a href="#" title="">
														<img src="images/ic2.png" alt="" />
														<span>Info</span>
													</a>
												</li>
												<li data-tab="saved-jobs">
													<a href="#" title="">
														<img src="images/ic4.png" alt="" />
														<span>Saved Jobs</span>
													</a>
												</li>
												<li data-tab="my-bids">
													<a href="#" title="">
														<img src="images/ic5.png" alt="" />
														<span>My Bids</span>
													</a>
												</li>
												<li data-tab="portfolio-dd">
													<a href="#" title="">
														<img src="images/ic3.png" alt="" />
														<span>Portfolio</span>
													</a>
												</li>
												<li data-tab="payment-dd">
													<a href="#" title="">
														<img src="images/ic6.png" alt="" />
														<span>Payment</span>
													</a>
												</li>
											</ul>
										</div>
                                        {/* {<!-- tab-feed end--> */} 
									</div>
                                    {/* {<!--user-tab-sec end--> */} 
									<div className="product-feed-tab current" id="feed-dd">
										<div className="posts-section">
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior Wordpress Developer</h3>
													<ul className="job-dt">
														<li><a href="#" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Front End Developer</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
														<li><a href="#" title="" className="bid_now">Bid Now</a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Simple ClassNameified Site</h3>
													<ul className="job-dt">
														<li><span>$300 - $350</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior UI / UX designer</h3>
													<ul className="job-dt">
														<li><a href="#" title="">Par Time</a></li>
														<li><span>$10 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
														<li><a href="#" title="" className="bid_now">Bid Now</a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Ios Shopping mobile app</h3>
													<ul className="job-dt">
														<li><span>$300 - $350</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="process-comm">
												<div className="spinner">
													<div className="bounce1"></div>
													<div className="bounce2"></div>
													<div className="bounce3"></div>
												</div>
											</div>
                                            {/* {<!--process-comm end--> */} 
										</div>
                                        {/* {<!--posts-section end--> */} 
									</div>
                                    {/* {<!--product-feed-tab end--> */} 
									<div className="product-feed-tab" id="info-dd">
										<div className="user-profile-ov">
											<h3><a href="#" title="" className="overview-open">Overview</a> <a href="#" title="" className="overview-open"><i className="fa fa-pencil"></i></a></h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
										</div>
                                        {/* {<!--user-profile-ov end--> */} 
										<div className="user-profile-ov st2">
											<h3><a href="#" title="" className="exp-bx-open">Experience </a><a href="#" title="" className="exp-bx-open"><i className="fa fa-pencil"></i></a> <a href="#" title="" className="exp-bx-open"><i className="fa fa-plus-square"></i></a></h3>
											<h4>Web designer <a href="#" title=""><i className="fa fa-pencil"></i></a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
											<h4>UI / UX Designer <a href="#" title=""><i className="fa fa-pencil"></i></a></h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id.</p>
											<h4>PHP developer <a href="#" title=""><i className="fa fa-pencil"></i></a></h4>
											<p className="no-margin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
										</div>
                                        {/* {<!--user-profile-ov end--> */} 
										<div className="user-profile-ov">
											<h3><a href="#" title="" className="ed-box-open">Education</a> <a href="#" title="" className="ed-box-open"><i className="fa fa-pencil"></i></a> <a href="#" title=""><i className="fa fa-plus-square"></i></a></h3>
											<h4>Master of Computer Science</h4>
											<span>2015 - 2018</span>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. </p>
										</div>
                                        {/* {<!--user-profile-ov end--> */} 
										<div className="user-profile-ov">
											<h3><a href="#" title="" className="lct-box-open">Location</a> <a href="#" title="" className="lct-box-open"><i className="fa fa-pencil"></i></a> <a href="#" title=""><i className="fa fa-plus-square"></i></a></h3>
											<h4>India</h4>
											<p>151/4 BT Chownk, Delhi </p>
										</div>
                                        {/* {<!--user-profile-ov end--> */} 
										<div className="user-profile-ov">
											<h3><a href="#" title="" className="skills-open">Skills</a> <a href="#" title="" className="skills-open"><i className="fa fa-pencil"></i></a> <a href="#"><i className="fa fa-plus-square"></i></a></h3>
											<ul>
												<li><a href="#" title="">HTML</a></li>
												<li><a href="#" title="">PHP</a></li>
												<li><a href="#" title="">CSS</a></li>
												<li><a href="#" title="">Javascript</a></li>
												<li><a href="#" title="">Wordpress</a></li>
												<li><a href="#" title="">Photoshop</a></li>
												<li><a href="#" title="">Illustrator</a></li>
												<li><a href="#" title="">Corel Draw</a></li>
											</ul>
										</div>
                                        {/* {<!--user-profile-ov end--> */} 
									</div>
                                    {/* {<!--product-feed-tab end--> */} 
									<div className="product-feed-tab" id="saved-jobs">
										<div className="posts-section">
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior Wordpress Developer</h3>
													<ul className="job-dt">
														<li><a href="#" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior Wordpress Developer</h3>
													<ul className="job-dt">
														<li><a href="#" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior Wordpress Developer</h3>
													<ul className="job-dt">
														<li><a href="#" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior Wordpress Developer</h3>
													<ul className="job-dt">
														<li><a href="#" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="process-comm">
												<a href="#" title=""><img src="images/process-icon.png" alt="" /></a>
											</div>
                                            {/* {<!--process-comm end--> */} 
										</div>
                                        {/* {<!--posts-section end--> */} 
									</div>
                                    {/* {<!--product-feed-tab end--> */} 
									<div className="product-feed-tab" id="my-bids">
										<div className="posts-section">
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Frontend Developer</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
														<li><a href="#" title="" className="bid_now">Bid Now</a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Simple ClassNameified Site</h3>
													<ul className="job-dt">
														<li><span>$300 - $350</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
														<li><a href="#" title="">Photoshop</a></li> 	
														<li><a href="#" title="">Illustrator</a></li> 	
														<li><a href="#" title="">Corel Draw</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Frontend Developer</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
														<li><a href="#" title="" className="bid_now">Bid Now</a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Ios Shopping mobile app</h3>
													<ul className="job-dt">
														<li><span>$300 - $350</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
														<li><a href="#" title="">Photoshop</a></li> 	
														<li><a href="#" title="">Illustrator</a></li> 	
														<li><a href="#" title="">Corel Draw</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Frontend Developer</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
														<li><a href="#" title="" className="bid_now">Bid Now</a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Simple ClassNameified Site</h3>
													<ul className="job-dt">
														<li><span>$300 - $350</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
														<li><a href="#" title="">Photoshop</a></li> 	
														<li><a href="#" title="">Illustrator</a></li> 	
														<li><a href="#" title="">Corel Draw</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>John Doe</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="#" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
														<ul className="ed-options">
															<li><a href="#" title="">Edit Post</a></li>
															<li><a href="#" title="">Unsaved</a></li>
															<li><a href="#" title="">Unbid</a></li>
															<li><a href="#" title="">Close</a></li>
															<li><a href="#" title="">Hide</a></li>
														</ul>
													</div>
												</div>
												<div className="epi-sec">
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Frontend Developer</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="#" title=""><i className="la la-bookmark"></i></a></li>
														<li><a href="#" title=""><i className="la la-envelope"></i></a></li>
														<li><a href="#" title="" className="bid_now">Bid Now</a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Ios Shopping mobile app</h3>
													<ul className="job-dt">
														<li><span>$300 - $350</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="#" title="">HTML</a></li>
														<li><a href="#" title="">PHP</a></li>
														<li><a href="#" title="">CSS</a></li>
														<li><a href="#" title="">Javascript</a></li>
														<li><a href="#" title="">Wordpress</a></li> 	
														<li><a href="#" title="">Photoshop</a></li> 	
														<li><a href="#" title="">Illustrator</a></li> 	
														<li><a href="#" title="">Corel Draw</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="#"><i className="la la-heart"></i> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="#" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a><i className="la la-eye"></i>Views 50</a>
												</div>
											</div>
                                            {/* {<!--post-bar end--> */} 
											<div className="process-comm">
												<a href="#" title=""><img src="images/process-icon.png" alt="" /></a>
											</div>
                                            {/* {<!--process-comm end--> */} 
										</div>
                                        {/* {<!--posts-section end--> */} 
									</div>
                                    {/* {<!--product-feed-tab end--> */} 
									<div className="product-feed-tab" id="portfolio-dd">
										<div className="portfolio-gallery-sec">
											<h3>Portfolio</h3>
											<div className="gallery_pf">
												<div className="row">
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/271x174" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* {<!--gallery_pt end--> */} 
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* {<!--gallery_pt end--> */} 
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* {<!--gallery_pt end--> */} 
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* {<!--gallery_pt end--> */} 
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-6 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="#" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
												</div>
											</div>
                                            {/* <!--gallery_pf end--> */}
										</div>
                                        {/* <!--portfolio-gallery-sec end--> */}
									</div>
                                    {/* <!--product-feed-tab end--> */}
									<div className="product-feed-tab" id="payment-dd">
										<div className="billing-method">
											<ul>
												<li>
													<h3>Add Billing Method</h3>
													<a href="#" title=""><i className="fa fa-plus-circle"></i></a>
												</li>
												<li>
													<h3>See Activity</h3>
													<a href="#" title="">View All</a>
												</li>
												<li>
													<h3>Total Money</h3>
													<span>$0.00</span>
												</li>
											</ul>
											<div className="lt-sec">
												<img src="images/lt-icon.png" alt="" />
												<h4>All your transactions are saved here</h4>
												<a href="#" title="">Click Here</a>
											</div>
										</div>
                                        {/* <!--billing-method end--> */}
										<div className="add-billing-method">
											<h3>Add Billing Method</h3>
											<h4><img src="images/dlr-icon.png" alt="" /><span>With workwise payment protection , only pay for work delivered.</span></h4>
											<div className="payment_methods">
												<h4>Credit or Debit Cards</h4>
												<form>
													<div className="row">
														<div className="col-lg-12">
															<div className="cc-head">
																<h5>Card Number</h5>
																<ul>
																	<li><img src="images/cc-icon1.png" alt="" /></li>
																	<li><img src="images/cc-icon2.png" alt="" /></li>
																	<li><img src="images/cc-icon3.png" alt="" /></li>
																	<li><img src="images/cc-icon4.png" alt="" /></li>
																</ul>
															</div>
															<div className="inpt-field pd-moree">
																<input type="text" name="cc-number" placeholder="" />
																<i className="fa fa-credit-card"></i>
															</div>
                                                            {/* <!--inpt-field end--> */}
														</div>
														<div className="col-lg-6">
															<div className="cc-head">
																<h5>First Name</h5>
															</div>
															<div className="inpt-field">
																<input type="text" name="f-name" placeholder="" />
															</div>
                                                            {/* <!--inpt-field end--> */}
														</div>
														<div className="col-lg-6">
															<div className="cc-head">
																<h5>Last Name</h5>
															</div>
															<div className="inpt-field">
																<input type="text" name="l-name" placeholder="" />
															</div>
                                                            {/* <!--inpt-field end--> */}
														</div>
														<div className="col-lg-6">
															<div className="cc-head">
																<h5>Expiresons</h5>
															</div>
															<div className="rowwy">
																<div className="row">
																	<div className="col-lg-6 pd-left-none no-pd">
																		<div className="inpt-field">
																			<input type="text" name="f-name" placeholder="" />
																		</div>
                                                                        {/* {<!--inpt-field end--> */} 
																	</div>
																	<div className="col-lg-6 pd-right-none no-pd">
																		<div className="inpt-field">
																			<input type="text" name="f-name" placeholder="" />
																		</div>
                                                                        {/* {<!--inpt-field end--> */} 
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="cc-head">
																<h5>Cvv (Security Code) <i className="fa fa-question-circle"></i></h5>
															</div>
															<div className="inpt-field">
																<input type="text" name="l-name" placeholder="" />
															</div>
                                                            {/* <!--inpt-field end--> */}
														</div>
														<div className="col-lg-12">
															<button type="submit">Continue</button>
														</div>
													</div>
												</form>
												<h4>Add Paypal Account</h4>
											</div>
										</div>
                                        {/* <!--add-billing-method end--> */}
									</div>
                                    {/* <!--product-feed-tab end--> */}
								</div>
                                {/* <!--main-ws-sec end--> */}
							</div>
							<div className="col-lg-3">
								<div className="right-sidebar">
									<div className="message-btn">
										<a href="#" title=""><i className="fa fa-envelope"></i> Message</a>
									</div>
									<div className="widget widget-portfolio">
										<div className="wd-heady">
											<h3>Portfolio</h3>
											<img src="images/photo-icon.png" alt="" />
										</div>
										<div className="pf-gallery">
											<ul>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="#" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
											</ul>
										</div>
                                        {/* <!--pf-gallery end--> */}
									</div>
                                    {/* <!--widget-portfolio end--> */}
								</div>
                                {/* <!--right-sidebar end--> */}
							</div>
						</div>
					</div>
                    {/* <!-- main-section-data end--> */}
				</div> 
			</div>
		</main>
        </Fragment>
    )
}
export default MyProfileFeed