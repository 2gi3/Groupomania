

function PopUpbox (){
	return(
		<div className="post-popup job_post">
			<div className="post-project">
				<h3>Create a post</h3>
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
	)

}
export default PopUpbox