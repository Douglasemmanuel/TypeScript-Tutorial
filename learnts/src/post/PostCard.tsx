import React from 'react'
import { postProps } from '../types/types';
function PostCard(props:postProps) {
  return (
    <div className='postCard'>
     <h1>{props.title}</h1>
     <p>{props.body}</p>
     
    </div>
   
  )
}

export default PostCard