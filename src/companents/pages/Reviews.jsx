import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentsThunk, getCommentsAC } from '../../redux/PostsReducer';

const Reviews = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.postsReducer.comments)

    useEffect(() => {
        dispatch(addCommentsThunk())
    }, [])
    return (
        <div>
            <h1>Reviews</h1>
            <div>{comments&&comments.map(item =>
                <div key={item.id} style={{marginTop:"15px"}}>
                    <h5>{item.email}</h5> 
                    <div>{item.body}</div>
                </div>)}
            </div>
        </div>
    );
};

export default Reviews;