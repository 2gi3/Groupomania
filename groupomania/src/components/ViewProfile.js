import '../css/style.css';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function ViewProfile() {
	let userName = sessionStorage.getItem('UserName');
	let userEmail = sessionStorage.getItem('UserEmail');


	let UserId = sessionStorage.getItem('UserId')
	const [history, setHistory] = useState([])
	useEffect(() => {
		axios.get(`http://localhost:3000/api/user-posts/${UserId}`,
			// {   headers: {
			//         'Authorization': `token ${access_token}`
			//     }
			// }
		)
			.then(res => {
				setHistory(res.data.map(a => a.postId))
			}
			).catch(err => {
				console.log(err)
			})
	}, [])
	console.log(history)
	sessionStorage.setItem("history", history)





	const deleteUser = () => {
		const userId = sessionStorage.getItem('UserId');
		axios.delete(`http://localhost:3000/api/auth/${userId}`, {
			headers: {
				//   Authorization: authorizationToken
			},
		});
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('UserId');
		sessionStorage.removeItem('UserName');
		sessionStorage.removeItem('UserEmail');
		window.location = "/";
	}
	if (!sessionStorage.getItem('token')) {

		return <Navigate to={"/signin"} />;
	}
	return (
		<section className="profile-account-setting">
			<div className="container">
				<div className="account-tabs-setting">
					<div className="row">
						<div className="col-lg-9">
							<div className="tab-content" id="nav-tabContent">
								<div className="tab-pane fade show active" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
									<div className="acc-setting">
										<h3>Account Details</h3>
										<form>
											<div className="notbar">
												<h4>Full name</h4>
												<p>{userName}</p>
												<div className="toggle-btn">
													<a href="#" title=""><img src="images/up-btn.png" alt="" /></a>
												</div>
											</div>
											{/* <!--notbar end--> */}
											<div className="notbar">
												<h4> Email</h4>
												<p>{userEmail}</p>
												<div className="toggle-btn">
													<a href="#" title=""><img src="images/up-btn.png" alt="" /></a>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className="col-lg-3">
							<div className="acc-leftbar">
								<button onClick={deleteUser}><i className="fa fa-random"></i>Delete your account</button>
							</div>
							{/* <!--acc-leftbar end--> */}
						</div>
					</div>
				</div>
				{/* <!--account-tabs-setting end--> */}
			</div>
		</section>
	)
}
export default ViewProfile