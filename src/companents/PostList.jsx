import React from 'react';
import PostElement from "./PostElement"
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group'
import './PostElement.css'

function PostList ({posts, onDelete, onChange}) {
    if(!posts.length) {
        return <div>The list of posts is empty</div>
    }


    return (
        <div>
            <TransitionGroup>
                {
                   posts.map((item, index) =>
                    <CSSTransition
                        key={item.id} 
                        timeout={500}
                        classNames="post"
                    >
                        <PostElement
                            id={item.id} 
                            title={item.title} 
                            body={item.body} 
                            number={index + 1} 
                            onDelete={onDelete} 
                            checked={item.isChecked} 
                            onChange={onChange}
                        />
                    </CSSTransition>
                        
                    )
                }
            </TransitionGroup>
        </div>
    )
}

export default PostList