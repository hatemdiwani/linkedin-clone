import React from 'react'
import '../styles/posttype.css'

function PostType({Icon,title,color}) {
    return (
        <div className="post-type">
            <Icon  style={{color:color}} className="post-type-icons"/>
            <h4 className="post-type-title">{title}</h4>
        </div>
    )
}

export default PostType
