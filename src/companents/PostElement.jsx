import React from 'react'
import './PostElement.css'

function PostElement ({title, description, number, id, onDelete}) {
    return (
        <div className="post">
            <strong className="post__id">{number}</strong>
            <div className="post_info">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <button onClick={() => onDelete(id)} className="post__btn">Delete</button>
        </div>
    )
}

export default PostElement