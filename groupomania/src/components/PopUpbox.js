import React,{ useEffect, useState } from 'react';
import axios from 'axios'

function PopUpbox (){
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [UserName, setUserName] = useState('');
	
	const createPost=(e)=>{
		e.preventDefault();
		console.log(UserName, title, content)
		let data ={
            UserName:UserName,
			title:title,
            content:content                      
        }
		
		axios.post("http://localhost:3000/api/posts",data)
            .then(
                (res)=>{
                    console.log('post created');               
         
            })
            .catch((err)=>{
                            console.log(err);
            });	
			window.location="/";	

	}
	return(
		<div className="post-popup job_post">
			<div className="post-project">
				<h3>Create a post</h3>
				<div className="post-project-fields">
					<form onSubmit={event =>createPost(event)}>
						<div className="row">
							<div className="col-lg-12">
								<input type="text" name="title" placeholder="Title" onChange={event => setTitle(event.target.value)} />
							</div>
							{/* <div>
								<input type="file" name="picture" />
							</div>						 */}
							<div className="col-lg-12">
								<textarea name="content" placeholder="content" onChange={event => setContent(event.target.value)}></textarea>
							</div>
							<div className="col-lg-12">
								<textarea name="UserName" placeholder="UserName" onChange={event => setUserName(event.target.value)}></textarea>
							</div>
							<div className="col-lg-12">
								<ul>
									<li><button className="active" type="submit" value="post">Postt</button></li>
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