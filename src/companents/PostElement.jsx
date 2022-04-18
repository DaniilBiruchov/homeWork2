import React from 'react'
import './PostElement.css'
import Button from './Button/Button'
import { Link } from 'react-router-dom'

function PostElement ({title, body, number, id, onDelete, checked, onChange}) {
    let message = ''
    if (checked) {
        message = <p>{body}</p>
    } else {
        message = ''
    }
    
    return (
        <div className="post">
        
            <div className="post__info">
                <input type="checkbox" checked={checked} onChange={() => onChange(id)}/>    
                <strong className="post__id">{number}.</strong>
                <h3>{title}</h3>
            </div>
            <p>{message}</p> 
            <div className='post__btn'>
                <Button onClick={() => onDelete(id)} className="post__btn">Delete</Button>
                <Link to={`/posts/${id}`}><Button>Open Post</Button></Link>
            </div>
        </div>
    )
}

export default PostElement