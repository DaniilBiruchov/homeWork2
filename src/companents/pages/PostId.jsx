import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../../API/PostService';

const PostId = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    useEffect(()=> {
        fetchPosts(params.id)
    }, [params.id])


    const fetchPosts = async (id) => {
        const post = await PostService.getById(id)
        setPost(post)
      }

    return (
        <div>
            <h1>{post.id}. {post.title}</h1>
            <p style={{fontSize: '20px',}}>{post.body}</p>
        </div>
    );
};

export default PostId;