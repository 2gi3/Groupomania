import { Fragment } from 'react';
import '../css/style.css';


function CompanyProfile(){
    return(
    <Fragment>
    <div className="col-lg-3">
								<div className="main-left-sidebar">
									<div className="user_profile">
										<div className="user-pro-img">
											<img src="http://via.placeholder.com/170x170" alt="" />
										</div>
                                        {/* <!--user-pro-img end--> */}
										<div className="user_pro_status">
											<ul className="flw-hr">
												<li><a href="http://www.example.com" title="" className="flww"><i className="la la-plus" /> Follow</a></li>
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
                                        {/* <!--user_pro_status end--> */}
										<ul className="social_links">
											<li><a href="http://www.example.com" title=""><i className="la la-globe" /> www.example.com</a></li>
											<li><a href="http://www.example.com" title=""><i className="fa fa-facebook-square" /> Http://www.facebook.com/john...</a></li>
											<li><a href="http://www.example.com" title=""><i className="fa fa-twitter" /> Http://www.Twitter.com/john...</a></li>
											<li><a href="http://www.example.com" title=""><i className="fa fa-google-plus-square" /> Http://www.googleplus.com/john...</a></li>
											<li><a href="http://www.example.com" title=""><i className="fa fa-behance-square" /> Http://www.behance.com/john...</a></li>
											<li><a href="http://www.example.com" title=""><i className="fa fa-pinterest" /> Http://www.pinterest.com/john...</a></li>
											<li><a href="http://www.example.com" title=""><i className="fa fa-instagram" /> Http://www.instagram.com/john...</a></li>
											<li><a href="http://www.example.com" title=""><i className="fa fa-youtube" /> Http://www.youtube.com/john...</a></li>
										</ul>
									</div>
                                    {/* <!--user_profile end--> */}
									<div className="suggestions full-width">
										<div className="sd-title">
											<h3>Suggestions</h3>
											<i className="la la-ellipsis-v" />
										</div>
                                        {/* <!--sd-title end--> */}
										<div className="suggestions-list">
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>Jessica William</h4>
													<span>Graphic Designer</span>
												</div>
												<span><i className="la la-plus" /></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>John Doe</h4>
													<span>PHP Developer</span>
												</div>
												<span><i className="la la-plus" /></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>Poonam</h4>
													<span>Wordpress Developer</span>
												</div>
												<span><i className="la la-plus" /></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>Bill Gates</h4>
													<span>C & C++ Developer</span>
												</div>
												<span><i className="la la-plus" /></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>Jessica William</h4>
													<span>Graphic Designer</span>
												</div>
												<span><i className="la la-plus" /></span>
											</div>
											<div className="suggestion-usd">
												<img src="http://via.placeholder.com/35x35" alt="" />
												<div className="sgt-text">
													<h4>John Doe</h4>
													<span>PHP Developer</span>
												</div>
												<span><i className="la la-plus" /></span>
											</div>
											<div className="view-more">
												<a href="http://www.example.com" title="">View More</a>
											</div>
										</div>
                                        {/* <!--suggestions-list end--> */}
									</div>
                                    {/* <!--suggestions end--> */}
								</div>
                                {/* <!--main-left-sidebar end--> */}
							</div>
							<div className="col-lg-6">
								<div className="main-ws-sec">
									<div className="user-tab-sec">
										<h3>Facebook Inc.</h3>
										<div className="star-descp">
											<span>Established Since 2009</span>
											<ul>
												<li><i className="fa fa-star" /></li>
												<li><i className="fa fa-star" /></li>
												<li><i className="fa fa-star" /></li>
												<li><i className="fa fa-star" /></li>
												<li><i className="fa fa-star-half-o" /></li>
											</ul>
										</div>
                                        {/* <!--star-descp end--> */}
										<div className="tab-feed">
											<ul>
												<li data-tab="feed-dd" className="active">
													<a href="http://www.example.com" title="">
														<img src="images/ic1.png" alt="" />
														<span>Feed</span>
													</a>
												</li>
												<li data-tab="info-dd">
													<a href="http://www.example.com" title="">
														<img src="images/ic2.png" alt="" />
														<span>Info</span>
													</a>
												</li>
												<li data-tab="portfolio-dd">
													<a href="http://www.example.com" title="">
														<img src="images/ic3.png" alt="" />
														<span>Portfolio</span>
													</a>
												</li>
											</ul>
										</div>
                                        {/* <!-- tab-feed end--> */}
									</div>
                                    {/* <!--user-tab-sec end--> */}
									<div className="product-feed-tab current" id="feed-dd">
										<div className="posts-section">
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>Facebook Inc.</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="http://www.example.com" title="" className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
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
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="http://www.example.com" title=""><i className="la la-bookmark" /></a></li>
														<li><a href="http://www.example.com" title=""><i className="la la-envelope" /></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior PHP Developer</h3>
													<ul className="job-dt">
														<li><a href="http://www.example.com" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="http://www.example.com" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="http://www.example.com" title="">HTML</a></li>
														<li><a href="http://www.example.com" title="">PHP</a></li>
														<li><a href="http://www.example.com" title="">CSS</a></li>
														<li><a href="http://www.example.com" title="">Javascript</a></li>
														<li><a href="http://www.example.com" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="http://www.example.com" title=''><i className="la la-heart" /> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="http://www.example.com" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a href="http://www.example.com" title=''><i className="la la-eye" />Views 50</a>
												</div>
											</div>
                                            {/* <!--post-bar end--> */}
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>Facebook Inc.</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="http://www.example.com" title="" className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
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
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="http://www.example.com" title=""><i className="la la-bookmark" /></a></li>
														<li><a href="http://www.example.com" title=""><i className="la la-envelope" /></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior UI / UX designer</h3>
													<ul className="job-dt">
														<li><a href="http://www.example.com" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="http://www.example.com" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="http://www.example.com" title="">HTML</a></li>
														<li><a href="http://www.example.com" title="">PHP</a></li>
														<li><a href="http://www.example.com" title="">CSS</a></li>
														<li><a href="http://www.example.com" title="">Javascript</a></li>
														<li><a href="http://www.example.com" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="http://www.example.com" title=''><i className="la la-heart" /> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="http://www.example.com" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a href="http://www.example.com" title=''><i className="la la-eye" />Views 50</a>
												</div>
											</div>
                                            {/* <!--post-bar end--> */}
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>Facebook Inc.</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="http://www.example.com" title="" className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
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
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="http://www.example.com" title=""><i className="la la-bookmark" /></a></li>
														<li><a href="http://www.example.com" title=""><i className="la la-envelope" /></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior Wordpress Developer</h3>
													<ul className="job-dt">
														<li><a href="http://www.example.com" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="http://www.example.com" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="http://www.example.com" title="">HTML</a></li>
														<li><a href="http://www.example.com" title="">PHP</a></li>
														<li><a href="http://www.example.com" title="">CSS</a></li>
														<li><a href="http://www.example.com" title="">Javascript</a></li>
														<li><a href="http://www.example.com" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="http://www.example.com" title=''><i className="la la-heart" /> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="http://www.example.com" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a href="http://www.example.com" title=''><i className="la la-eye" />Views 50</a>
												</div>
											</div>
                                            {/* <!--post-bar end--> */}
											<div className="post-bar">
												<div className="post_topbar">
													<div className="usy-dt">
														<img src="http://via.placeholder.com/50x50" alt="" />
														<div className="usy-name">
															<h3>Facebook Inc. 	</h3>
															<span><img src="images/clock.png" alt="" />3 min ago</span>
														</div>
													</div>
													<div className="ed-opts">
														<a href="http://www.example.com" title="" className="ed-opts-open"><i className="la la-ellipsis-v" /></a>
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
													<ul className="descp">
														<li><img src="images/icon8.png" alt="" /><span>Epic Coder</span></li>
														<li><img src="images/icon9.png" alt="" /><span>India</span></li>
													</ul>
													<ul className="bk-links">
														<li><a href="http://www.example.com" title=""><i className="la la-bookmark" /></a></li>
														<li><a href="http://www.example.com" title=""><i className="la la-envelope" /></a></li>
													</ul>
												</div>
												<div className="job_descp">
													<h3>Senior UI / UX designer</h3>
													<ul className="job-dt">
														<li><a href="http://www.example.com" title="">Full Time</a></li>
														<li><span>$30 / hr</span></li>
													</ul>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="http://www.example.com" title="">view more</a></p>
													<ul className="skill-tags">
														<li><a href="http://www.example.com" title="">HTML</a></li>
														<li><a href="http://www.example.com" title="">PHP</a></li>
														<li><a href="http://www.example.com" title="">CSS</a></li>
														<li><a href="http://www.example.com" title="">Javascript</a></li>
														<li><a href="http://www.example.com" title="">Wordpress</a></li> 	
													</ul>
												</div>
												<div className="job-status-bar">
													<ul className="like-com">
														<li>
															<a href="http://www.example.com" title=''><i className="la la-heart" /> Like</a>
															<img src="images/liked-img.png" alt="" />
															<span>25</span>
														</li> 
														<li><a href="http://www.example.com" title="" className="com"><img src="images/com.png" alt="" /> Comment 15</a></li>
													</ul>
													<a href="http://www.example.com" title=''><i className="la la-eye" />Views 50</a>
												</div>
											</div>
                                            {/* <!--post-bar end--> */}
											<div className="process-comm">
												<div className="spinner">
													<div className="bounce1"></div>
													<div className="bounce2"></div>
													<div className="bounce3"></div>
												</div>
											</div>
                                            {/* <!--process-comm end--> */}
										</div>
                                        {/* <!--posts-section end--> */}
									</div>
                                    {/* <!--product-feed-tab end--> */}
									<div className="product-feed-tab" id="info-dd">
										<div className="user-profile-ov">
											<h3><a href="http://www.example.com" title="" className="overview-open">Overview</a> <a href="http://www.example.com" title="" className="overview-open"><i className="fa fa-pencil" /></a></h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
										</div>
                                        {/* <!--user-profile-ov end--> */}
										<div className="user-profile-ov st2">
											<h3><a href="http://www.example.com" title="" className="esp-bx-open">Establish Since </a><a href="http://www.example.com" title="" className="esp-bx-open"><i className="fa fa-pencil" /></a> <a href="http://www.example.com" title="" className="esp-bx-open"><i className="fa fa-plus-square" /></a></h3>
											<span>February 2004</span>
										</div>
                                        {/* <!--user-profile-ov end--> */}
										<div className="user-profile-ov">
											<h3><a href="http://www.example.com" title="" className="emp-open">Total Employees</a> <a href="http://www.example.com" title="" className="emp-open"><i className="fa fa-pencil" /></a> <a href="http://www.example.com" title="" className="emp-open"><i className="fa fa-plus-square" /></a></h3>
											<span>17,048</span>
										</div>
                                        {/* <!--user-profile-ov end--> */}
										<div className="user-profile-ov">
											<h3><a href="http://www.example.com" title="" className="lct-box-open">Location</a> <a href="http://www.example.com" title="" className="lct-box-open"><i className="fa fa-pencil" /></a> <a href="http://www.example.com" title="" className="lct-box-open"><i className="fa fa-plus-square" /></a></h3>
											<h4>USA</h4>
											<p> Menlo Park, California, United States</p>
										</div>
                                        {/* <!--user-profile-ov end--> */}
									</div>
                                    {/* <!--product-feed-tab end--> */}
									<div className="product-feed-tab" id="portfolio-dd">
										<div className="portfolio-gallery-sec">
											<h3>Portfolio</h3>
											<div className="gallery_pf">
												<div className="row">
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/271x174" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
														</div>
                                                        {/* <!--gallery_pt end--> */}
													</div>
													<div className="col-lg-4 col-md-4 col-sm-4 col-6">
														<div className="gallery_pt">
															<img src="http://via.placeholder.com/170x170" alt="" />
															<a href="http://www.example.com" title=""><img src="images/all-out.png" alt="" /></a>
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
								</div>
                                {/* <!--main-ws-sec end--> */}
							</div>
							<div className="col-lg-3">
								<div className="right-sidebar">
									<div className="message-btn">
										<a href="http://www.example.com" title=""><i className="fa fa-envelope" /> Message</a>
									</div>
									<div className="widget widget-portfolio">
										<div className="wd-heady">
											<h3>Portfolio</h3>
											<img src="images/photo-icon.png" alt="" />
										</div>
										<div className="pf-gallery">
											<ul>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
												<li><a href="http://www.example.com" title=""><img src="http://via.placeholder.com/70x70" alt="" /></a></li>
											</ul>
										</div>
                                        {/* <!--pf-gallery end--> */}
									</div>
                                    {/* <!--widget-portfolio end--> */}
								</div>
                                {/* <!--right-sidebar end--> */}
							</div>
                            </Fragment>
    )                        
}
export default CompanyProfile