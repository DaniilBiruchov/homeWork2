import React from 'react'
import PostElement from "./PostElement"

function PostList ({posts, onDelete, onChange}) {
    return (
        <div>
            {
                posts.map((item, index) => (
                    <PostElement 
                        key={item.id} 
                        id={item.id} 
                        title={item.title} 
                        description={item.description} 
                        number={index + 1} 
                        onDelete={onDelete} 
                        checked={item.isChecked} 
                        onChange={onChange}

                        />
                ))
            }
        </div>
    )
}

export default PostList