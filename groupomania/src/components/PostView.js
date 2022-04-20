import '../css/style.css';
import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';

function PostView() {
	const [postData, setPostData] = useState('')
	const params = useParams()
	let history = localStorage.getItem("history");
	let alreadyRead=[];
	let postId;
	useEffect(() => {
		axios.get(`http://localhost:3000/api/posts/${params.id}`)
			.then(res => {
				setPostData(res.data)
				console.log(res.data.id)
			     postId= res.data.id;
				// save post id to local storage
				if(history==null){
					alreadyRead.push(postId);
					localStorage.setItem("history", JSON.stringify(alreadyRead))
				}else{
					alreadyRead = JSON.parse(localStorage.getItem("history"));
					alreadyRead.push(postId);
					localStorage.setItem("history", JSON.stringify(alreadyRead));
				}

			}
			).catch(err => { 
				console.log(err)
			})
			
	}, [])
	
	// not working
	if(history==null){
		console.log('first post read')
	}else if(history.indexOf(postData.id)!== -1){
		console.log('already read');
	}else{
		console.log('not yet read');
	}

	
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
						<button className='p-2 col-4'>delete </button>
						<button className='p-2 col-4'>modify </button>
					</div>
				</div>
			</section>






		</Fragment>

	)
}
export default PostView
