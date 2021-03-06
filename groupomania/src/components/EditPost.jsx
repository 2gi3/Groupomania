import '../css/style.css';
import { Fragment } from 'react';
import PopUpbox from './PopUpbox';
import { Navigate } from 'react-router-dom';

function EditPost() {
	if (!sessionStorage.getItem('token')) {

		return <Navigate to={"/signin"} />;
	}
	return (
		<Fragment>
			<section className="forum-sec">
				<div className="container">

					{/* <!--forum-links end--> */}
					<div className="forum-links-btn">
						<a href="#" title=""><i className="fa fa-bars" /></a>
					</div>
				</div>
			</section>

			<section className="forum-page">
				<div className="container">
					<div className="forum-questions-sec">
						<div className="row">
							<div className="col col-lg-8">
								<div className="forum-post-view">
									<div className=" job_post">
										<div className="post-project">
											<h3>Modify post</h3>
											<div className="post-project-fields">
												<form>
													<div className="row">
														<div className="col-lg-12">
															<input type="text" name="title" placeholder="Title" />
														</div>
														<div>
															<input type="file" name="picture" />
														</div>

														<div className="col-lg-12">
															<textarea name="description" placeholder="Description"></textarea>
														</div>
														<div className="col-lg-12">
															<ul>
																<li><button className="active" type="submit" value="post">Post</button></li>
																<li><a href="http://www.example.com" title="">Cancel</a></li>
															</ul>
														</div>
													</div>
												</form>
											</div>
											{/* <!--post-project-fields end--> */}
											<a href="www.google.com" title=""><i className="la la-times-circle-o"></i></a>
										</div>
										{/* <!--post-project end--> */}
									</div>

								</div>



							</div>

						</div>
					</div>

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
export default EditPost