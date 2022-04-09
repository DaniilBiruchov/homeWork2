import React from 'react'
import './PostElement.css'

function PostElement ({title, body, number, id, onDelete, checked, onChange}) {
    let message = ''
    if (checked) {
        message = <p>{title}</p>
    } else {
        message = ''
    }
    
    return (
        <div className="post">
            <input type="checkbox" checked={checked} onChange={() => onChange(id)}/>
            <p>{message}</p>
            <strong className="post__id">{number}</strong>
            <div className="post_info">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <button onClick={() => onDelete(id)} className="post__btn">Delete</button>
        </div>
    )
}

export default PostElement