import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';


const PostContainer = props => {
    // console.log('postcontainer: ', props)
    return (
        <div>
            <img src = {props.post.thumbnailUrl} alt = "" />
            <span>{props.post.username}</span>
            <img src = {props.post.imageUrl} alt = "" />
            <span>{props.post.likes} likes</span>
            {props.post.comments.map(comment => {
                return (
                    <div key = {comment.id}>
                        <CommentSection comment = {comment}/>
                    </div>
                )
            })}
        </div>
    )
}

PostContainer.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.string.isRequired,
        username: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        imageUrl: PropTypes.string,
        likes: PropTypes.number,
        timeStamp: PropTypes.string,
        comments: PropTypes.arrayOf(PropTypes.object)
    })
}

export default PostContainer;