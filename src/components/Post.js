import React from 'react'
import '../styles/post.css'
import Avatar from '@material-ui/core/Avatar';
import PostType from './PostType'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatIcon from '@material-ui/icons/Chat'; 
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import SendIcon from '@material-ui/icons/Send';

function Post({post}) {
    return (
        <div className="post">
            
            <div className="post-header">
                <Avatar />
                <div className="post-info">
                    <h2>{post.name}</h2>
                    <p>{post.description}</p>
                </div>
            </div>

            <div className="post-body">
                <p>{post.message}</p>
            </div>

            <div className="post-interactions">
                <PostType Icon={ThumbUpAltIcon} color="gray" title="like"/>
                <PostType Icon={ChatIcon} color="gray" title="comment"/>
                <PostType Icon={ScreenShareIcon} color="gray" title="share"/>
                <PostType Icon={SendIcon} color="gray" title="send"/>
            </div>

        </div>
    )
}

export default Post
