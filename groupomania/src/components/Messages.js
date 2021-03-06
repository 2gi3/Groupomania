import { Fragment } from 'react';
import '../css/style.css';


function Messages(){
    return(
	  <Fragment>
        <section className="messages-page">
			<div className="container">
				<div className="messages-sec">
					<div className="row">
						<div className="col-lg-4 col-md-12 no-pdd">
							<div className="msgs-list">
								<div className="msg-title">
									<h3>Messages</h3>
									<ul>
										<li><a href="#" title=""><i className="fa fa-cog"></i></a></li>
										<li><a href="#" title=""><i className="fa fa-ellipsis-v"></i></a></li>
									</ul>
								</div>
                                {/* <!--msg-title end--> */}
								<div className="messages-list">
									<ul>
										<li className="active">
											<div className="usr-msg-details">
												<div className="usr-ms-img">
													<img src="http://via.placeholder.com/50x50" alt="" />
													<span className="msg-status"></span>
												</div>
												<div className="usr-mg-info">
													<h3>John Doe</h3>
													<p>Lorem ipsum dolor <img src="images/smley.png" alt="" /></p>
												</div>
                                                {/* <!--usr-mg-info end--> */}
												<span className="posted_time">1:55 PM</span>
												<span className="msg-notifc">1</span>
											</div>
                                            {/* <!--usr-msg-details end--> */}
										</li>
										<li>
											<div className="usr-msg-details">
												<div className="usr-ms-img">
													<img src="http://via.placeholder.com/50x50" alt="" />
												</div>
												<div className="usr-mg-info">
													<h3>David Vane</h3>
													<p>Vestibulum ac diam..</p>
												</div>
                                                {/* <!--usr-mg-info end--> */}
												<span className="posted_time">1:55 PM</span>
											</div>
                                            {/* <!--usr-msg-details end--> */}
										</li>
										<li>
											<div className="usr-msg-details">
												<div className="usr-ms-img">
													<img src="http://via.placeholder.com/50x50" alt="" />
												</div>
												<div className="usr-mg-info">
													<h3>Nancy Dilan</h3>
													<p>Quam vehicula.</p>
												</div>
                                                {/* <!--usr-mg-info end--> */}
												<span className="posted_time">1:55 PM</span>
											</div>
                                            {/* <!--usr-msg-details end--> */}
										</li>
										<li>
											<div className="usr-msg-details">
												<div className="usr-ms-img">
													<img src="http://via.placeholder.com/50x50" alt="" />
													<span className="msg-status"></span>
												</div>
												<div className="usr-mg-info">
													<h3>Norman Kenney</h3>
													<p>Nulla quis lorem ut..</p>
												</div>
                                                {/* <!--usr-mg-info end--> */}
												<span className="posted_time">1:55 PM</span>
											</div>
                                            {/* <!--usr-msg-details end--> */}
										</li>
										<li>
											<div className="usr-msg-details">
												<div className="usr-ms-img">
													<img src="http://via.placeholder.com/50x50" alt="" />
													<span className="msg-status"></span>
												</div>
												<div className="usr-mg-info">
													<h3>James Dilan</h3>
													<p>Vivamus magna just..</p>
												</div>
                                                {/* <!--usr-mg-info end--> */}
												<span className="posted_time">1:55 PM</span>
											</div>
                                            {/* <!--usr-msg-details end--> */}
										</li>
										<li>
											<div className="usr-msg-details">
												<div className="usr-ms-img">
													<img src="http://via.placeholder.com/50x50" alt="" />
												</div>
												<div className="usr-mg-info">
													<h3>Mike Dorn</h3>
													<p>Praesent sapien massa.</p>
												</div>
                                                {/* <!--usr-mg-info end--> */}
												<span className="posted_time">1:55 PM</span>
											</div>
                                            {/* <!--usr-msg-details end--> */}
										</li>
										<li>
											<div className="usr-msg-details">
												<div className="usr-ms-img">
													<img src="http://via.placeholder.com/50x50" alt="" />
												</div>
												<div className="usr-mg-info">
													<h3>Patrick Morison</h3>
													<p>Convallis a pellente...</p>
												</div>
                                                {/* <!--usr-mg-info end--> */}
												<span className="posted_time">1:55 PM</span>
											</div>
                                            {/* <!--usr-msg-details end--> */}
										</li>
									</ul>
								</div>
                                {/* <!--messages-list end--> */}
							</div>
                            {/* <!--msgs-list end--> */}
						</div>
						<div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
							<div className="main-conversation-box">
								<div className="message-bar-head">
									<div className="usr-msg-details">
										<div className="usr-ms-img">
											<img src="http://via.placeholder.com/50x50" alt="" />
										</div>
										<div className="usr-mg-info">
											<h3>John Doe</h3>
											<p>Online</p>
										</div>
                                        {/* <!--usr-mg-info end--> */}
									</div>
									<a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
								</div>
                                {/* <!--message-bar-head end--> */}
								<div className="messages-line">
									<div className="main-message-box">
										<div className="messg-usr-img">
											<img src="http://via.placeholder.com/50x50" alt="" />
										</div>
                                        {/* <!--messg-usr-img end--> */}
										<div className="message-dt">
											<div className="message-inner-dt img-bx">
												<img src="http://via.placeholder.com/151x125" alt="" />
												<img src="http://via.placeholder.com/151x125" alt="" />
												<img src="http://via.placeholder.com/151x125" alt="" />
											</div>
                                            {/* <!--message-inner-dt end--> */}
											<span>Sat, Aug 23, 1:08 PM</span>
										</div>
                                        {/* <!--message-dt end--> */}
									</div>
                                    {/* <!--main-message-box end--> */}
									<div className="main-message-box ta-right">
										<div className="message-dt">
											<div className="message-inner-dt">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
											</div>
                                            {/* <!--message-inner-dt end--> */}
											<span>Sat, Aug 23, 1:08 PM</span>
										</div>
                                        {/* <!--message-dt end--> */}
										<div className="messg-usr-img">
											<img src="http://via.placeholder.com/50x50" alt="" />
										</div>
                                        {/* <!--messg-usr-img end--> */}
									</div>
                                    {/* <!--main-message-box end--> */}
									<div className="main-message-box st3">
										<div className="message-dt st3">
											<div className="message-inner-dt">
												<p>Cras ultricies ligula.<img src="images/smley.png" alt="" /></p>
											</div>
                                            {/* <!--message-inner-dt end--> */}
											<span>5 minutes ago</span>
										</div>
                                        {/* <!--message-dt end--> */}
										<div className="messg-usr-img">
											<img src="http://via.placeholder.com/50x50" alt="" />
										</div>
                                        {/* <!--messg-usr-img end--> */}
									</div>
                                    {/* <!--main-message-box end--> */}
									<div className="main-message-box ta-right">
										<div className="message-dt">
											<div className="message-inner-dt">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
											</div>
                                            {/* <!--message-inner-dt end--> */}
											<span>Sat, Aug 23, 1:08 PM</span>
										</div>
                                        {/* <!--message-dt end--> */}
										<div className="messg-usr-img">
											<img src="http://via.placeholder.com/50x50" alt="" />
										</div>
                                        {/* <!--messg-usr-img end--> */}
									</div>
                                    {/* <!--main-message-box end--> */}
									<div className="main-message-box st3">
										<div className="message-dt st3">
											<div className="message-inner-dt">
												<p>Lorem ipsum dolor sit amet</p>
											</div>
                                            {/* <!--message-inner-dt end--> */}
											<span>2 minutes ago</span>
										</div>
                                        {/* <!--message-dt end--> */}
										<div className="messg-usr-img">
											<img src="http://via.placeholder.com/50x50" alt="" />
										</div>
                                        {/* <!--messg-usr-img end--> */}
									</div>
                                    {/* <!--main-message-box end--> */}
									<div className="main-message-box ta-right">
										<div className="message-dt">
											<div className="message-inner-dt">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor.</p>
											</div>
                                            {/* <!--message-inner-dt end--> */}
											<span>Sat, Aug 23, 1:08 PM</span>
										</div>
                                        {/* <!--message-dt end--> */}
										<div className="messg-usr-img">
											<img src="http://via.placeholder.com/50x50" alt="" />
										</div>
                                        {/* <!--messg-usr-img end--> */}
									</div>
                                    {/* <!--main-message-box end--> */}
									<div className="main-message-box st3">
										<div className="message-dt st3">
											<div className="message-inner-dt">
												<p>....</p>
											</div>
                                            {/* <!--message-inner-dt end--> */}
											<span>Typing...</span>
										</div>
                                        {/* <!--message-dt end--> */}
										<div className="messg-usr-img">
											<img src="http://via.placeholder.com/50x50" alt="" />
										</div>
                                        {/* <!--messg-usr-img end--> */}
									</div>
                                    {/* <!--main-message-box end--> */}
								</div>
                                {/* <!--messages-line end--> */}
								<div className="message-send-area">
									<form>
										<div className="mf-field">
											<input type="text" name="message" placeholder="Type a message here" />
											<button type="submit">Send</button>
										</div>
										<ul>
											<li><a href="#" title=""><i className="fa fa-smile-o"></i></a></li>
											<li><a href="#" title=""><i className="fa fa-camera"></i></a></li>
											<li><a href="#" title=""><i className="fa fa-paperclip"></i></a></li>
										</ul>
									</form>
								</div>
                                {/* <!--message-send-area end--> */}
							</div>
                            {/* <!--main-conversation-box end--> */}
						</div>
					</div>
				</div>
                {/* <!--messages-sec end--> */}
			</div>
		</section>
	  </Fragment>    

    )
}
export default Messages