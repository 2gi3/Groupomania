// ftd
import '../css/style.css';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function PostView() {
	const [postData, setPostData] = useState('')
	const params = useParams()
	const [readStamp, setReadStamp] = useState('')
	const access_token = sessionStorage.getItem('token');
	let history = sessionStorage.getItem("history");
	let UserId = sessionStorage.getItem('UserId')
	let alreadyRead = [];
	let postId ;

	useEffect(() => {
		axios.get(`http://localhost:3000/api/posts/${params.id}`,
			{   headers: {
					'Authorization': `token ${access_token}`
				}
			})
			.then(res => {
				setPostData(res.data)
				// postId = res.data.id
				// save post id to local storage
				if (history.length === 0) {
					alreadyRead.push(postId);
					sessionStorage.setItem("history", JSON.stringify(alreadyRead))
				} else {
					alreadyRead = JSON.parse(sessionStorage.getItem("history"));
					alreadyRead.push(postId);
					sessionStorage.setItem("history", JSON.stringify(alreadyRead));
				}
				// log wether or not it's been read
				if (history == null) {
					setReadStamp('congratulations on reading your first post!');
				} else if (history.indexOf(postId) !== -1) {
					setReadStamp('You have already read this post!');
				} else if (history.indexOf(postId) === -1) {
					setReadStamp("You haven't read this post yet");
				}
			}
			).catch(err => {
				console.log(err)
			})
	}, [])

	const updateHistory=()=>{
	let userPost ={
		"userId":UserId,
		"postId":JSON.stringify(postData.id	)
	}
	let userPostString = JSON.stringify(userPost)
	console.log(userPostString)

	// let formData = new FormData
	// 	formData.append(
	// 		'userId',UserId
	// 	)
	// 	formData.append(
	// 		'postId',postData.id
	// 	)
	// 	console.log(formData)
	axios.post(`http://localhost:3000/api/user-posts/`, userPostString,
	{
		headers: {
		  'Authorization': `Basic ${access_token}`
		}
	  }
			)
}

	if (!sessionStorage.getItem('token'))
	 { return <Navigate to={"/signin"} />;}

	return (
		<Fragment>
			<section className="forum-page">
				<div className="container">
					<div className="forum-questions-sec">
						<div className="row">
							<div className="col-lg-8">
								<div className="forum-post-view border rounded">
									<h3>{readStamp}</h3>
									<h1 className='p-1 font-weight-bold'>{postData.title}</h1>
									<h6 className='p-1 font-weight-light font-italic'>`by {postData.UserName}`</h6>
									<p className='p-3 border-top'>{postData.content}</p>
								</div>
							</div>
						</div>
						<div className='row'>
							<div className='col-lg-8 d-flex flex-wrap justify-content-around'>
								<img src={postData.imageUrl} max-width='300' alt="" />
							</div>
						</div>
						<button className='p-2 col-4'>delete </button>
						<button className='p-2 col-4' onClick={updateHistory}>Mark as read </button>
					</div>
				</div>
			</section>
		</Fragment>
	)
}
export default PostView
