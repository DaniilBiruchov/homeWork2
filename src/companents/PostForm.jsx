import React from 'react';
import Input from './Input/Input';
import Button from './Button/Button';
import { useState } from 'react';

const PostForm = ({create, setVisible}) => {
    const [post, setPost] = useState({title: '', description: ''})

    function addNewPost (event) {
        event.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', description: ''})
        setVisible(false)
      }

    function closeCreatePost (event) {
        event.preventDefault()
        setVisible(false)
    }
    
    return (
        <form>
            <Input type="text" placeholder="Name post" value={post.title} onChange={event => setPost({...post, title: event.target.value})}/>
            <Input type="text" placeholder="Description post"  value={post.description} onChange={event => setPost({...post, description: event.target.value})}/>
            <Button onClick={addNewPost}>Add</Button>
            <Button onClick={closeCreatePost}>Close</Button>
        </form>
    );
};

export default PostForm;