import '../css/index.css';
import {Fragment} from 'react';

function Forum(){
    return(<Fragment>
<header>
			<div className="container">
				<div className="header-data">
					<div className="logo pd-btm">
						<a href="index.html" title=""><img src="images/logo.png" alt="" /></a>
					</div>
                    {/* <!--logo end--> */}
					<div className="forum-bar">
						<h2>Forum</h2>
						<ul>
							<li><a href="#" title="">Tags</a></li>
							<li><a href="#" title="">Users</a></li>
							<li><a href="#" title="" className="ask-question">Ask a question</a></li>
						</ul>
					</div>
                    {/* <!--search-bar end--> */}
					<div className="login_register">
						<ul>
							<li><a href="sign-in.html" title="">Login</a></li>
							<li><a href="sign-in.html" title="">Register</a></li>
						</ul>
					</div>
                    {/* <!--login_register end--> */}
					<div className="search-bar st2">
						<form>
							<input type="text" name="search" placeholder="Search..." />
							<button type="submit"><i className="la la-search"></i></button>
						</form>
					</div>
                    {/* <!--search-bar end--> */}
				</div>
                {/* <!--header-data end--> */}
			</div>
		</header>	


		<section className="forum-sec">
			<div className="container">
				<div className="forum-links">
					<ul>
						<li className="active"><a href="#" title="">Latest</a></li>
						<li><a href="#" title="">Unanswered</a></li>
						<li><a href="#" title="">Treading</a></li>
						<li><a href="#" title="">Popular This Week</a></li>
						<li><a href="#" title="">Popular of Month</a></li>
					</ul>
				</div>
                {/* <!--forum-links end--> */}
				<div className="forum-links-btn">
					<a href="#" title=""><i className="fa fa-bars"></i></a>
				</div>
			</div>
		</section>

		<section className="forum-page">
			<div className="container">
				<div className="forum-questions-sec">
					<div className="row">
						<div className="col-lg-8">
							<div className="forum-questions">
								<div className="usr-question">
									<div className="usr_img">
										<img src="http://via.placeholder.com/60x60" alt="" />
									</div>
									<div className="usr_quest">
										<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										<ul className="react-links">
											<li><a href="#" title=""><i className="fa fa-heart"></i> Vote 150</a></li>
											<li><a href="#" title=""><i className="fa fa-comment"></i> Comments  15</a></li>
											<li><a href="#" title=""><i className="fa fa-eye"></i> Views  50</a></li>
										</ul>
										<ul className="quest-tags">
											<li><a href="#" title="">Work</a></li>
											<li><a href="#" title="">Php</a></li>
											<li><a href="#" title="">Design</a></li>
										</ul>
									</div>
                                    {/* <!--usr_quest end--> */}
									<span className="quest-posted-time"><i className="fa fa-clock-o"></i>3 min ago</span>
								</div>
                                {/* <!--usr-question end--> */}
								<div className="usr-question">
									<div className="usr_img">
										<img src="http://via.placeholder.com/50x50" alt="" />
									</div>
									<div className="usr_quest">
										<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										<ul className="react-links">
											<li><a href="#" title=""><i className="fa fa-heart"></i> Vote 150</a></li>
											<li><a href="#" title=""><i className="fa fa-comment"></i> Comments  15</a></li>
											<li><a href="#" title=""><i className="fa fa-eye"></i> Views  50</a></li>
										</ul>
										<ul className="quest-tags">
											<li><a href="#" title="">Work</a></li>
											<li><a href="#" title="">Php</a></li>
											<li><a href="#" title="">Design</a></li>
										</ul>
									</div>
                                    {/* <!--usr_quest end--> */}
									<span className="quest-posted-time"><i className="fa fa-clock-o"></i>3 min ago</span>
								</div>
                                {/* <!--usr-question end--> */}
								<div className="usr-question">
									<div className="usr_img">
										<img src="http://via.placeholder.com/50x50" alt="" />
									</div>
									<div className="usr_quest">
										<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										<ul className="react-links">
											<li><a href="#" title=""><i className="fa fa-heart"></i> Vote 150</a></li>
											<li><a href="#" title=""><i className="fa fa-comment"></i> Comments  15</a></li>
											<li><a href="#" title=""><i className="fa fa-eye"></i> Views  50</a></li>
										</ul>
										<ul className="quest-tags">
											<li><a href="#" title="">Work</a></li>
											<li><a href="#" title="">Php</a></li>
											<li><a href="#" title="">Design</a></li>
										</ul>
									</div>
                                    {/* <!--usr_quest end--> */}
									<span className="quest-posted-time"><i className="fa fa-clock-o"></i>3 min ago</span>
								</div>
                                {/* <!--usr-question end--> */}
								<div className="usr-question">
									<div className="usr_img">
										<img src="http://via.placeholder.com/50x50" alt="" />
									</div>
									<div className="usr_quest">
										<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										<ul className="react-links">
											<li><a href="#" title=""><i className="fa fa-heart"></i> Vote 150</a></li>
											<li><a href="#" title=""><i className="fa fa-comment"></i> Comments  15</a></li>
											<li><a href="#" title=""><i className="fa fa-eye"></i> Views  50</a></li>
										</ul>
										<ul className="quest-tags">
											<li><a href="#" title="">Work</a></li>
											<li><a href="#" title="">Php</a></li>
											<li><a href="#" title="">Design</a></li>
										</ul>
									</div>
                                    {/* <!--usr_quest end--> */}
									<span className="quest-posted-time"><i className="fa fa-clock-o"></i>3 min ago</span>
								</div>
                                {/* <!--usr-question end--> */}
								<div className="usr-question">
									<div className="usr_img">
										<img src="http://via.placeholder.com/50x50" alt="" />
									</div>
									<div className="usr_quest">
										<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										<ul className="react-links">
											<li><a href="#" title=""><i className="fa fa-heart"></i> Vote 150</a></li>
											<li><a href="#" title=""><i className="fa fa-comment"></i> Comments  15</a></li>
											<li><a href="#" title=""><i className="fa fa-eye"></i> Views  50</a></li>
										</ul>
										<ul className="quest-tags">
											<li><a href="#" title="">Work</a></li>
											<li><a href="#" title="">Php</a></li>
											<li><a href="#" title="">Design</a></li>
										</ul>
									</div>
                                    {/* <!--usr_quest end--> */}
									<span className="quest-posted-time"><i className="fa fa-clock-o"></i>3 min ago</span>
								</div>
                                {/* <!--usr-question end--> */}
								<div className="usr-question">
									<div className="usr_img">
										<img src="http://via.placeholder.com/50x50" alt="" />
									</div>
									<div className="usr_quest">
										<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										<ul className="react-links">
											<li><a href="#" title=""><i className="fa fa-heart"></i> Vote 150</a></li>
											<li><a href="#" title=""><i className="fa fa-comment"></i> Comments  15</a></li>
											<li><a href="#" title=""><i className="fa fa-eye"></i> Views  50</a></li>
										</ul>
										<ul className="quest-tags">
											<li><a href="#" title="">Work</a></li>
											<li><a href="#" title="">Php</a></li>
											<li><a href="#" title="">Design</a></li>
										</ul>
									</div>
                                    {/* <!--usr_quest end--> */}
									<span className="quest-posted-time"><i className="fa fa-clock-o"></i>3 min ago</span>
								</div>
                                {/* <!--usr-question end--> */}
								<div className="usr-question">
									<div className="usr_img">
										<img src="http://via.placeholder.com/50x50" alt="" />
									</div>
									<div className="usr_quest">
										<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
										<ul className="react-links">
											<li><a href="#" title=""><i className="fa fa-heart"></i> Vote 150</a></li>
											<li><a href="#" title=""><i className="fa fa-comment"></i> Comments  15</a></li>
											<li><a href="#" title=""><i className="fa fa-eye"></i> Views  50</a></li>
										</ul>
										<ul className="quest-tags">
											<li><a href="#" title="">Work</a></li>
											<li><a href="#" title="">Php</a></li>
											<li><a href="#" title="">Design</a></li>
										</ul>
									</div>
                                    {/* <!--usr_quest end--> */}
									<span className="quest-posted-time"><i className="fa fa-clock-o"></i>3 min ago</span>
								</div>
                                {/* <!--usr-question end--> */}
							</div>
                            {/* <!--forum-questions end--> */}
							<nav aria-label="Page navigation example" className="full-pagi">
							<ul className="pagination">
								<li className="page-item"><a className="page-link pvr" href="#">Previous</a></li>
								<li className="page-item"><a className="page-link active" href="#">1</a></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item"><a className="page-link" href="#">4</a></li>
								<li className="page-item"><a className="page-link" href="#">5</a></li>
								<li className="page-item"><a className="page-link" href="#">6</a></li>
								<li className="page-item"><a className="page-link pvr" href="#">Next</a></li>
							</ul>
							</nav>
						</div>
						<div className="col-lg-4">
							<div className="widget widget-user">
								<h3 className="title-wd">Top User of the Week</h3>
								<ul>
									<li>
										<div className="usr-msg-details">
											<div className="usr-ms-img">
												<img src="http://via.placeholder.com/50x50" alt="" />
											</div>
											<div className="usr-mg-info">
												<h3>Jessica William</h3>
												<p>Graphic Designer </p>
											</div>
                                            {/* <!--usr-mg-info end--> */}
										</div>
										<span><img src="images/price1.png" alt="" />1185</span>
									</li>
									<li>
										<div className="usr-msg-details">
											<div className="usr-ms-img">
												<img src="http://via.placeholder.com/50x50" alt="" />
											</div>
											<div className="usr-mg-info">
												<h3>John Doe</h3>
												<p>PHP Developer</p>
											</div>
                                            {/* <!--usr-mg-info end--> */}
										</div>
										<span><img src="images/price2.png" alt="" />1165</span>
									</li>
									<li>
										<div className="usr-msg-details">
											<div className="usr-ms-img">
												<img src="http://via.placeholder.com/50x50" alt="" />
											</div>
											<div className="usr-mg-info">
												<h3>Poonam</h3>
												<p>Wordpress Developer </p>
											</div>
                                            {/* <!--usr-mg-info end--> */}
										</div>
										<span><img src="images/price3.png" alt="" />1120</span>
									</li>
									<li>
										<div className="usr-msg-details">
											<div className="usr-ms-img">
												<img src="http://via.placeholder.com/50x50" alt="" />
											</div>
											<div className="usr-mg-info">
												<h3>Bill Gates</h3>
												<p>C & C++ Developer </p>
											</div>
                                            {/* <!--usr-mg-info end--> */}
										</div>
										<span><img src="images/price4.png" alt="" />1009</span>
									</li>
								</ul>
							</div>
                            {/* <!--widget-user end--> */}
							<div className="widget widget-adver">
								<img src="http://via.placeholder.com/370x270" alt="" />
							</div>
                            {/* <!--widget-adver end--> */}
						</div>
					</div>
				</div>
                {/* <!--forum-questions-sec end--> */}
			</div>
		</section>
        {/* <!--forum-page end--> */}
    </Fragment>
        

    )
}
export default Forum