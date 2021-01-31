
import {db} from '../firebase'

const PostRef = db.ref('/posts')

export const addPost = (post) =>{
    console.log(post)
    PostRef.push(post);
}

export const getPosts= () =>{
    const postsList = [];
    PostRef.on('value' , (snapshot) => {
        
        const myposts = snapshot.val();
        
        for (let id in myposts) {
        postsList.push({ id, ...myposts[id] });
        }
      console.log(postsList)
      
    })
    return postsList;
}