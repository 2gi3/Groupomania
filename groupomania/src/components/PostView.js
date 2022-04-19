import '../css/style.css';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function PostView() {
	const [postData, setPostData] = useState('')
	const params = useParams()
	useEffect(() => {
		axios.get(`http://localhost:3000/api/posts/${params.id}`)
			.then(res => {
				setPostData(res.data)
			}
			).catch(err => {
				console.log(err)
			})
			
	}, [])
	
	if (!sessionStorage.getItem('token')) {

		return <Navigate to={"/signin"} />;
	}


	return (
		<Fragment>

			<section className="forum-page">
				<div className="container">
					<div className="forum-questions-sec">
						<div className="row">
							<div className="col-lg-8">
								<div className="forum-post-view border rounded">
									<h1 className='p-1 font-weight-bold'>{postData.title}</h1>
									<h6 className='p-1 font-weight-light font-italic'>`by {postData.UserName}`</h6>
									<p className='p-3 border-top'>{postData.content}</p>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-8 d-flex flex-wrap justify-content-around'>
                               <img src={postData.imageUrl} max-width='300'  alt=""/>
                            </div>
					    </div>
					</div>
				</div>
			</section>






		</Fragment>

	)
}
export default PostView
