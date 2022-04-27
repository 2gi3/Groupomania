// ftd
import '../css/style.css'
import clock from "../assets/images/clock.png"
import likedImg from "../assets/images/liked-img.png"
import com from "../assets/images/com.png"
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function PostsTest2() {
    const [posts, setPosts] = useState([''])
    const [resourceType, setResourceType] = useState(1)
    const userName = sessionStorage.getItem('UserName');
    const access_token = sessionStorage.getItem('token');

    useEffect(() => {
        axios.get("http://localhost:3000/api/posts",
            {   headers: {
                    'Authorization': `token ${access_token}`
                }
            })
            .then(res => {
                console.log(res)
                setPosts(res.data)
            }
            ).catch(err => {
                console.log(err)
            })

    }, [resourceType])

    const content = posts.map((data, index) => {
        return (
            <div className="posts-section col col-md-6 col-lg-4" key={index}>
                <Link to={`postview/${data.id}`} >
                    <div className="post-bar">
                        <div className="post_topbar">
                            <div className="usy-dt">
                                <img src="http://via.placeholder.com/50x50" alt="" />
                                <div className="usy-name">
                                    <h3>{data.UserName}</h3>
                                    <span><img src={clock} alt="clock" />3 min ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="epi-sec">
                            <ul className="bk-links">
                                <li><a href="http://www.example.com" title=""><i className="la la-bookmark"></i></a></li>
                                <li><a href="http://www.example.com" title=""><i className="la la-envelope"></i></a></li>
                            </ul>
                        </div>
                        <div className="job_descp ">
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                            <div className='d-flex flex-wrap justify-content-around'>
                                <img src={data.imageUrl} alt="" />
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <div className="col no-pd">
            <div className="main-ws-sec">
                <div className="post-topbar">
                    <div className="post-st">
                        <ul>
                            <li><a className="post-jb active" href="#" title="">Create a Post</a></li>
                        </ul>
                    </div>
                    <h1>Hello {userName} &#x1F31D; <br />Here's what's going on in our community:</h1>
                </div>
                {content}
            </div>
        </div>
    )
}


export default PostsTest2