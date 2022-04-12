import React, { useEffect, useState } from 'react';
import axios from 'axios'

function TestComponent() {
    const [posts, setPosts] =useState([''])
    const [resourceType, setResourceType] = useState(1)

    useEffect(() => {
        // axios.get("https://localhost:3000/api/posts")
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                 console.log(res)
                 setPosts(res.data)
            }
            ).catch(err => {
                console.log(err)
            })
            
    }, [resourceType])

    const content = posts.map(( data,index) =>{
        return(
            <div style={{border: '1px solid black'}} key={index}>
                <h1 style={{backgroundColor: 'yellow'}}>{data.title} </h1>
                <h3>name {data.userId}</h3>
                <p>{data.body}</p>

            </div>

        )
    }

    )
       
    return (
        <>
        <h1>TEST get posts array TEST</h1>     
        <div>
            <button onClick={()=> setResourceType(x=>x+1)}>add</button>          
        </div>
        <h1>{resourceType}</h1>
        {content}
        </>
    )
}

export default TestComponent