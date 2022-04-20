import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'
import PostService from '../../API/PostService';
import Button from '../Button/Button'

const PostId = () => {
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const params = useParams()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    useEffect(()=> {
        fetchPosts(params.id)
        fetchPostComments(params.id)
    }, [params.id])


    const fetchPosts = async () => {
        const post = await PostService.getById(params.id)
        setPost(post)
      }

      
    const fetchPostComments = async () => {
        const comments =  await PostService.getCommentsByPostId(params.id)
        setComments(comments)
    }

    
    return (
        <div>
      {/* 1 */}

      <div>
        {post && (
          <div>
            <h1>{params.id}. {post.title}</h1>
            <p  style={{marginTop:"15px", fontSize: "18px"}}>{post.body}</p>
            <div style={{marginTop:"25px"}}>
              <div style={{marginTop:"25px"}}> 
                 <h3>Comments:</h3>
                 <div>
                   {comments.map(comm=>
                    <div  key={comm.id} style={{marginTop:"15px"}}>
                      <h5>{comm.email}</h5>
                      <div>{comm.body}</div>
                    </div>)}
                 </div>
                 
              </div>
              <Button onClick={goBack}>Go Back</Button>
              <Link to={`/posts/${params.id}/edit`}><Button>Edit Post</Button></Link>
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default PostId;