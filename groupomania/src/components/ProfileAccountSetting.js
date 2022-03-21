import '../css/style.css';

function ProfileAccountSetting(){
    return(
        <section className="profile-account-setting">
			<div className="container">
				<div className="account-tabs-setting">
					<div className="row">
						<div className="col-lg-3">
							<div className="acc-leftbar">
								<div className="nav nav-tabs" id="nav-tab" role="tablist">
								    <a className="nav-item nav-link active" id="nav-acc-tab" data-toggle="tab" href="#nav-acc" role="tab" aria-controls="nav-acc" aria-selected="true"><i className="la la-cogs"></i>Account Setting</a>
								    <a className="nav-item nav-link" id="nav-status-tab" data-toggle="tab" href="#nav-status" role="tab" aria-controls="nav-status" aria-selected="false"><i className="fa fa-line-chart"></i>Status</a>
								    <a className="nav-item nav-link" id="nav-password-tab" data-toggle="tab" href="#nav-password" role="tab" aria-controls="nav-password" aria-selected="false"><i className="fa fa-lock"></i>Change Password</a>
								    <a className="nav-item nav-link" id="nav-notification-tab" data-toggle="tab" href="#nav-notification" role="tab" aria-controls="nav-notification" aria-selected="false"><i className="fa fa-flash"></i>Notifications</a>
								    <a className="nav-item nav-link" id="nav-requests-tab" data-toggle="tab" href="#nav-requests" role="tab" aria-controls="nav-requests" aria-selected="false"><i className="fa fa-group"></i>Requests</a>
								    <a className="nav-item nav-link" id="security-login" data-toggle="tab" href="#security-login" role="tab" aria-controls="security-login" aria-selected="false"><i className="fa fa-user-secret"></i>Security and Login</a>
								    <a className="nav-item nav-link" id="privacy" data-toggle="tab" href="#privacy" role="tab" aria-controls="privacy" aria-selected="false"><i className="fa fa-paw"></i>Privacy</a>
								    <a className="nav-item nav-link" id="blockking" data-toggle="tab" href="#blockking" role="tab" aria-controls="blockking" aria-selected="false"><i className="fa fa-cc-diners-club"></i>Blocking</a>
								    <a className="nav-item nav-link" id="nav-deactivate-tab" data-toggle="tab" href="#nav-deactivate" role="tab" aria-controls="nav-deactivate" aria-selected="false"><i className="fa fa-random"></i>Deactivate Account</a>
								  </div>
							</div>
                            {/* <!--acc-leftbar end--> */}
						</div>
						<div className="col-lg-9">
							<div className="tab-content" id="nav-tabContent">
								<div className="tab-pane fade show active" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
									<div className="acc-setting">
										<h3>Account Setting</h3>
										<form>
											<div className="notbar">
												<h4>Notification Sound</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
												<div className="toggle-btn">
													<a href="#" title=""><img src="images/up-btn.png" alt="" /></a>
												</div>
											</div>
                                            {/* <!--notbar end--> */}
											<div className="notbar">
												<h4>Notification Email</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
												<div className="toggle-btn">
													<a href="#" title=""><img src="images/up-btn.png" alt="" /></a>
												</div>
											</div>
                                            {/* <!--notbar end--> */}
											<div className="notbar">
												<h4>Chat Message Sound</h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id</p>
												<div className="toggle-btn">
													<a href="#" title=""><img src="images/up-btn.png" alt="" /></a>
												</div>
											</div>
                                            {/* <!--notbar end--> */}
											<div className="save-stngs">
												<ul>
													<li><button type="submit">Save Setting</button></li>
													<li><button type="submit">Restore Setting</button></li>
												</ul>
											</div>
                                            {/* <!--save-stngs end--> */}
										</form>
									</div>
                                    {/* <!--acc-setting end--> */}
								</div>
							  	<div className="tab-pane fade" id="nav-status" role="tabpanel" aria-labelledby="nav-status-tab">
							  		<div className="acc-setting">
							  			<h3>Profile Status</h3>
							  			<div className="profile-bx-details">
							  				<div className="row">
							  					<div className="col-lg-3 col-md-6 col-sm-12">
							  						<div className="profile-bx-info">
							  							<div className="pro-bx">
							  								<img src="images/pro-icon1.png" alt="" />
							  								<div className="bx-info">
							  									<h3>$5,145</h3>
							  									<h5>Total Income</h5>
							  								</div>
                                                              {/* <!--bx-info end--> */}
							  							</div>
                                                          {/* <!--pro-bx end--> */}
							  							<p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
							  						</div>
                                                      {/* <!--profile-bx-info end--> */}
							  					</div>
							  					<div className="col-lg-3 col-md-6 col-sm-12">
							  						<div className="profile-bx-info">
							  							<div className="pro-bx">
							  								<img src="images/pro-icon2.png" alt="" />
							  								<div className="bx-info">
							  									<h3>$4,745</h3>
							  									<h5>Widthraw</h5>
							  								</div>
                                                              {/* <!--bx-info end--> */}
							  							</div>
                                                          {/* <!--pro-bx end--> */}
							  							<p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
							  						</div>
                                                      {/* <!--profile-bx-info end--> */}
							  					</div>
							  					<div className="col-lg-3 col-md-6 col-sm-12">
							  						<div className="profile-bx-info">
							  							<div className="pro-bx">
							  								<img src="images/pro-icon3.png" alt="" />
							  								<div className="bx-info">
							  									<h3>$1,145</h3>
							  									<h5>Sent</h5>
							  								</div>
                                                              {/* <!--bx-info end--> */}
							  							</div>
                                                          {/* <!--pro-bx end--> */}
							  							<p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
							  						</div>
                                                      {/* <!--profile-bx-info end--> */}
							  					</div>
							  					<div className="col-lg-3 col-md-6 col-sm-12">
							  						<div className="profile-bx-info">
							  							<div className="pro-bx">
							  								<img src="images/pro-icon4.png" alt="" />
							  								<div className="bx-info">
							  									<h3>130</h3>
							  									<h5>Total Projects</h5>
							  								</div>
                                                              {/* <!--bx-info end--> */}
							  							</div>
                                                          {/* <!--pro-bx end--> */}
							  							<p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
							  						</div>
                                                      {/* <!--profile-bx-info end--> */}
							  					</div>
							  				</div>
							  			</div>
                                          {/* <!--profile-bx-details end--> */}
							  			<div className="pro-work-status">
							  				
                                              {/* <!-- <h4>Work Status  -  Last Months Working Status</h4> --> */}
							  			</div>
                                          {/* <!--pro-work-status end--> */}
							  		</div>
                                      {/* <!--acc-setting end--> */}
							  	</div>
							  	<div className="tab-pane fade" id="nav-password" role="tabpanel" aria-labelledby="nav-password-tab">
							  		<div className="acc-setting">
										<h3>Account Setting</h3>
										<form>
											<div className="cp-field">
												<h5>Old Password</h5>
												<div className="cpp-fiel">
													<input type="text" name="old-password" placeholder="Old Password" />
													<i className="fa fa-lock"></i>
												</div>
											</div>
											<div className="cp-field">
												<h5>New Password</h5>
												<div className="cpp-fiel">
													<input type="text" name="new-password" placeholder="New Password" />
													<i className="fa fa-lock"></i>
												</div>
											</div>
											<div className="cp-field">
												<h5>Repeat Password</h5>
												<div className="cpp-fiel">
													<input type="text" name="repeat-password" placeholder="Repeat Password" />
													<i className="fa fa-lock"></i>
												</div>
											</div>
											<div className="cp-field">
												<h5><a href="#" title="">Forgot Password?</a></h5>
											</div>
											<div className="save-stngs pd2">
												<ul>
													<li><button type="submit">Save Setting</button></li>
													<li><button type="submit">Restore Setting</button></li>
												</ul>
											</div>
                                            {/* <!--save-stngs end--> */}
										</form>
									</div>
                                    {/* <!--acc-setting end--> */}
							  	</div>
							  	<div className="tab-pane fade" id="nav-notification" role="tabpanel" aria-labelledby="nav-notification-tab">
							  		<div className="acc-setting">
							  			<h3>Notifications</h3>
							  			<div className="notifications-list">
							  				<div className="notfication-details">
								  				<div className="noty-user-img">
								  					<img src="http://via.placeholder.com/35x35" alt="" />
								  				</div>
								  				<div className="notification-info">
								  					<h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
								  					<span>2 min ago</span>
								  				</div>
                                                  {/* <!--notification-info --> */}
							  				</div>
                                              {/* <!--notfication-details end--> */}
							  				<div className="notfication-details">
								  				<div className="noty-user-img">
								  					<img src="http://via.placeholder.com/35x35" alt="" />
								  				</div>
								  				<div className="notification-info">
								  					<h3><a href="#" title="">Poonam Verma</a> Bid on your Latest project.</h3>
								  					<span>2 min ago</span>
								  				</div>
                                                  {/* <!--notification-info --> */}
							  				</div>
                                              {/* <!--notfication-details end--> */}
							  				<div className="notfication-details">
								  				<div className="noty-user-img">
								  					<img src="http://via.placeholder.com/35x35" alt="" />
								  				</div>
								  				<div className="notification-info">
								  					<h3><a href="#" title="">Tonney Dhman</a> Comment on your project.</h3>
								  					<span>2 min ago</span>
								  				</div>
                                                  {/* <!--notification-info --> */}
							  				</div>
                                              {/* <!--notfication-details end--> */}
							  				<div className="notfication-details">
								  				<div className="noty-user-img">
								  					<img src="http://via.placeholder.com/35x35" alt="" />
								  				</div>
								  				<div className="notification-info">
								  					<h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
								  					<span>2 min ago</span>
								  				</div>
                                                  {/* <!--notification-info --> */}
							  				</div>
                                              {/* <!--notfication-details end--> */}
							  				<div className="notfication-details">
								  				<div className="noty-user-img">
								  					<img src="http://via.placeholder.com/35x35" alt="" />
								  				</div>
								  				<div className="notification-info">
								  					<h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
								  					<span>2 min ago</span>
								  				</div>
                                                  {/* <!--notification-info --> */}
							  				</div>
                                              {/* <!--notfication-details end--> */}
							  				<div className="notfication-details">
								  				<div className="noty-user-img">
								  					<img src="http://via.placeholder.com/35x35" alt="" />
								  				</div>
								  				<div className="notification-info">
								  					<h3><a href="#" title="">Poonam Verma </a> Bid on your Latest project.</h3>
								  					<span>2 min ago</span>
								  				</div>
                                                  {/* <!--notification-info --> */}
							  				</div>
                                              {/* <!--notfication-details end--> */}
							  				<div className="notfication-details">
								  				<div className="noty-user-img">
								  					<img src="http://via.placeholder.com/35x35" alt="" />
								  				</div>
								  				<div className="notification-info">
								  					<h3><a href="#" title="">Tonney Dhman</a> Comment on your project</h3>
								  					<span>2 min ago</span>
								  				</div>
                                                  {/* <!--notification-info --> */}
							  				</div>
                                              {/* <!--notfication-details end--> */}
							  				<div className="notfication-details">
								  				<div className="noty-user-img">
								  					<img src="http://via.placeholder.com/35x35" alt="" />
								  				</div>
								  				<div className="notification-info">
								  					<h3><a href="#" title="">Jassica William</a> Comment on your project.</h3>
								  					<span>2 min ago</span>
								  				</div>
                                                  {/* <!--notification-info --> */}
							  				</div>
                                              {/* <!--notfication-details end--> */}
							  			</div>
                                          {/* <!--notifications-list end--> */}
							  		</div>
                                      {/* <!--acc-setting end--> */}
							  	</div>
							  	<div className="tab-pane fade" id="nav-requests" role="tabpanel" aria-labelledby="nav-requests-tab">
							  		<div className="acc-setting">
							  			<h3>Requests</h3>
							  			<div className="requests-list">
							  				<div className="request-details">
							  					<div className="noty-user-img">
							  						<img src="http://via.placeholder.com/35x35" alt="" />
							  					</div>
							  					<div className="request-info">
							  						<h3>Jessica William</h3>
							  						<span>Graphic Designer</span>
							  					</div>
							  					<div className="accept-feat">
							  						<ul>
							  							<li><button type="submit" className="accept-req">Accept</button></li>
							  							<li><button type="submit" className="close-req"><i className="la la-close"></i></button></li>
							  						</ul>
							  					</div>
                                                  {/* <!--accept-feat end--> */}
							  				</div>
                                              {/* <!--request-detailse end--> */}
							  				<div className="request-details">
							  					<div className="noty-user-img">
							  						<img src="http://via.placeholder.com/35x35" alt="" />
							  					</div>
							  					<div className="request-info">
							  						<h3>John Doe</h3>
							  						<span>PHP Developer</span>
							  					</div>
							  					<div className="accept-feat">
							  						<ul>
							  							<li><button type="submit" className="accept-req">Accept</button></li>
							  							<li><button type="submit" className="close-req"><i className="la la-close"></i></button></li>
							  						</ul>
							  					</div>
                                                  {/* <!--accept-feat end--> */}
							  				</div>
                                              {/* <!--request-detailse end--> */}
							  				<div className="request-details">
							  					<div className="noty-user-img">
							  						<img src="http://via.placeholder.com/35x35" alt="" />
							  					</div>
							  					<div className="request-info">
							  						<h3>Poonam</h3>
							  						<span>Wordpress Developer</span>
							  					</div>
							  					<div className="accept-feat">
							  						<ul>
							  							<li><button type="submit" className="accept-req">Accept</button></li>
							  							<li><button type="submit" className="close-req"><i className="la la-close"></i></button></li>
							  						</ul>
							  					</div>
                                                  {/* <!--accept-feat end--> */}
							  				</div>
                                              {/* <!--request-detailse end--> */}
							  				<div className="request-details">
							  					<div className="noty-user-img">
							  						<img src="http://via.placeholder.com/35x35" alt="" />
							  					</div>
							  					<div className="request-info">
							  						<h3>Bill Gates</h3>
							  						<span>C & C++ Developer</span>
							  					</div>
							  					<div className="accept-feat">
							  						<ul>
							  							<li><button type="submit" className="accept-req">Accept</button></li>
							  							<li><button type="submit" className="close-req"><i className="la la-close"></i></button></li>
							  						</ul>
							  					</div>
                                                  {/* <!--accept-feat end--> */}
							  				</div>
                                              {/* <!--request-detailse end--> */}
							  				<div className="request-details">
							  					<div className="noty-user-img">
							  						<img src="http://via.placeholder.com/35x35" alt="" />
							  					</div>
							  					<div className="request-info">
							  						<h3>Jessica William</h3>
							  						<span>Graphic Designer</span>
							  					</div>
							  					<div className="accept-feat">
							  						<ul>
							  							<li><button type="submit" className="accept-req">Accept</button></li>
							  							<li><button type="submit" className="close-req"><i className="la la-close"></i></button></li>
							  						</ul>
							  					</div>
                                                  {/* <!--accept-feat end--> */}
							  				</div>
                                              {/* <!--request-detailse end--> */}
							  				<div className="request-details">
							  					<div className="noty-user-img">
							  						<img src="http://via.placeholder.com/35x35" alt="" />
							  					</div>
							  					<div className="request-info">
							  						<h3>John Doe</h3>
							  						<span>PHP Developer</span>
							  					</div>
							  					<div className="accept-feat">
							  						<ul>
							  							<li><button type="submit" className="accept-req">Accept</button></li>
							  							<li><button type="submit" className="close-req"><i className="la la-close"></i></button></li>
							  						</ul>
							  					</div>
                                                  {/* <!--accept-feat end--> */}
							  				</div>
                                              {/* <!--request-detailse end--> */}
							  			</div>
                                          {/* <!--requests-list end--> */}
							  		</div>
                                      {/* <!--acc-setting end--> */}
							  	</div>
							  	<div className="tab-pane fade" id="nav-deactivate" role="tabpanel" aria-labelledby="nav-deactivate-tab">
							  		<div className="acc-setting">
										<h3>Deactivate Account</h3>
										<form>
											<div className="cp-field">
												<h5>Email</h5>
												<div className="cpp-fiel">
													<input type="text" name="email" placeholder="Email" />
													<i className="fa fa-envelope"></i>
												</div>
											</div>
											<div className="cp-field">
												<h5>Password</h5>
												<div className="cpp-fiel">
													<input type="password" name="password" placeholder="Password" />
													<i className="fa fa-lock"></i>
												</div>
											</div>
											<div className="cp-field">
												<h5>Please Explain Further</h5>
												<textarea></textarea>
											</div>
											<div className="cp-field">
												<div className="fgt-sec">
													<input type="checkbox" name="cc" id="c4" />
													<label for="c4">
														<span></span>
													</label>
													<small>Email option out</small>
												</div>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium nulla quis erat dapibus, varius hendrerit neque suscipit. Integer in ex euismod, posuere lectus id,</p>
											</div>
											<div className="save-stngs pd3">
												<ul>
													<li><button type="submit">Save Setting</button></li>
													<li><button type="submit">Restore Setting</button></li>
												</ul>
											</div>
                                            {/* <!--save-stngs end--> */}
										</form>
									</div>
                                    {/* <!--acc-setting end--> */}
							  	</div>
							</div>
						</div>
					</div>
				</div>
                {/* <!--account-tabs-setting end--> */}
			</div>
		</section>
    )
}
export default ProfileAccountSetting