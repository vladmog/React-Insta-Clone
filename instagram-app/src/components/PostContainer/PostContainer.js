

import React from 'react';
import CommentSection from '../CommentSection/CommentSection'



const PostContainer = props => {
    console.log('postcontainer: ', props)
    return (
        <div>
            {props.dataArray.map(post => {
                return(
                    <div key = {post.id}>
                        <p>Hello</p>
                        <CommentSection comments = {post.comments} />
                    </div>
                )
            })}
        </div>
    )
}



export default PostContainer;