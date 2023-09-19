import React from 'react'
import PostCard from './PostCard'
import { postProps } from '../types/types';
const  getData = async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!res.ok){
        throw new Error("Failed to fetch data")
        
    }
    return res.json();
    console.log(res.json())
}
const PostList = async () =>{
  const data: postProps[] = await getData()
  return (
        <>
        {data.map((post)=>(
             <PostCard key={post.id} {...post} />
        ))}
        </>
    // <div className='postlist'>
    //     {data.map((post)=>(
    //          <PostCard key={post.id} {...post} />
    //     ))}
    // </div>
  )
}

export default PostList