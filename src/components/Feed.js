import React, { useEffect, useState } from 'react'
import '../styles/feed.css'
import CreateIcon from '@material-ui/icons/Create';
import PostType from './PostType';
import ImageIcon from '@material-ui/icons/Image';
import VideocamIcon from '@material-ui/icons/Videocam';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Post from './Post';
import {db} from '../firebase/firebase'
import * as PostsService from '../firebase/services/PostsService.js'


function Feed() {

    const [postText, setPostText] = useState('')
    const [posts,setPosts] = useState()
   
    
    useEffect(() => {
        
       fetchposts()
    }, [])
   
    function fetchposts(){
            const PostRef = db.ref('posts')
        const postsList = [];
    PostRef.on('value' , (snapshot) => {
        
        const myposts = snapshot.val();
        
        for (let id in myposts) {
        postsList.push({ id, ...myposts[id] });
        }
      console.log(postsList)
      setPosts(postsList); 
    })
        }


    const sendPost = e => {
      e.preventDefault();
        const post={
          name : "hatem diwani",
          description : "hello this is the firs post",
           message : "i did it"
       }
       PostsService.addPost(post);
       fetchposts();
       setPostText('');
    }

    console.log(posts)
    return (
        <div className="feed">
            <div className="feed-create-post">
                <div className="feed-new-post">
                <CreateIcon/>
                <form action="" >
                    <input value={postText} onChange={e => setPostText(e.value)} type="text"/>
                    <button type="submit" onClick={sendPost} >send</button>
                </form>
                </div>
                <div className="post-types">
                    <PostType Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                    <PostType Icon={VideocamIcon} title="Video" color="#E7A33F"/>
                    <PostType Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                    <PostType Icon={CalendarTodayIcon} title="Write article" color="#7FC15E"/>
                </div>
            </div>
            <hr/>
            {posts ?
            posts.map((post,index) => {
                return (
                    <Post key={index} post={post}/>
                )
                
            })
            
            :
            "loading ..."
            }
            
        </div>
    )
}

export default Feed
