import '../css/style.css'
import clock from "../assets/images/clock.png"
import likedImg from "../assets/images/liked-img.png"
import com from "../assets/images/com.png"
import React, { useEffect, useState } from 'react';
import axios from 'axios'

function PostsTest2() {
    const [posts, setPosts] = useState([''])
    const [resourceType, setResourceType] = useState(1)

    useEffect(() => {
        axios.get("http://localhost:3000/api/posts")
        // axios.get("https://jsonplaceholder.typicode.com/posts")
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
            <div className="posts-section col col-md-6" key={index}>
                <div className="post-bar">
                    <div className="post_topbar">
                        <div className="usy-dt">
                            <img src="http://via.placeholder.com/50x50" alt="" />
                            <div className="usy-name">
                                <h3>John {data.userId} Doe</h3>
                                <span><img src={clock} alt="clock" />3 min ago</span>
                            </div>
                        </div>
                        <div className="ed-opts">
                            <a href="http://www.example.com" title="" className="ed-opts-open"><i className="la la-ellipsis-v"></i></a>
                            <ul className="ed-options">
                                <li><a href="http://www.example.com" title="">Edit Post</a></li>
                                <li><a href="http://www.example.com" title="">Unsaved</a></li>
                                <li><a href="http://www.example.com" title="">Unbid</a></li>
                                <li><a href="http://www.example.com" title="">Close</a></li>
                                <li><a href="http://www.example.com" title="">Hide</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="epi-sec">
                        <ul className="bk-links">
                            <li><a href="http://www.example.com" title=""><i className="la la-bookmark"></i></a></li>
                            <li><a href="http://www.example.com" title=""><i className="la la-envelope"></i></a></li>
                        </ul>
                    </div>
                    <div className="job_descp">
                        <h3>{data.title}</h3>
                        <p>{data.body}</p>
                    </div>
                    <div className="job-status-bar">
                        <ul className="like-com">
                            <li>
                                <a href="http://www.example.com"><i className="la la-heart"></i> Like</a>
                                <img src={likedImg} alt="" />
                                <span>25</span>
                            </li>
                            <li><a href="http://www.example.com" title="" className="com"><img src={com} alt="" /> Comment 15</a></li>
                        </ul>
                        <a href="http://www.example.com"><i className="la la-eye"></i>Views 50</a>
                    </div>
                </div>               
            </div>
        )
    })
    return (
        <div className="col no-pd">
            <div className="main-ws-sec">
                <div className="post-topbar">
                    <div className="user-picy">
                        <img src="http://via.placeholder.com/100x100" alt="" />
                    </div>
                    <div className="post-st">
                        <ul>
                            <li><a className="post-jb active" href="#" title="">Create a Post</a></li>
                        </ul>
                    </div>
                </div>
                {content}
            </div>
        </div>
    )
}


export default PostsTest2