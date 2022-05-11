import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCurrentPostThunk, getCommentsPostThunk } from '../../redux/PostsReducer';
import Button from '../Button/Button'

const PostId = () => {
    const dispatch = useDispatch()
    const post = useSelector(state => state.postsReducer.currentPost)
    const comments = useSelector(state => state.postsReducer.currentPost.comments)
    const params = useParams()
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    useEffect(()=> {
      dispatch(getCurrentPostThunk(params.id))
      dispatch(getCommentsPostThunk(params.id))
    }, [])

    return (
        <div>
      <div>
        {post && (
          <div>
            <h1>{params.id}. {post.title}</h1>
            <p  style={{marginTop:"15px", fontSize: "18px"}}>{post.body}</p>
            <div style={{marginTop:"25px"}}>
              <div style={{marginTop:"25px"}}> 
                 <h3>Comments:</h3>
                 <div>
                   {comments&& comments.map(comm=>
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