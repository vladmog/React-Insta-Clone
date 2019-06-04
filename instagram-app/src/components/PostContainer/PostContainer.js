import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';
import './PostContainer.css'


const PostContainer = props => {
    // console.log('postcontainer props: ', props)
    return (
        <div className = "post">
            <div className = "poster">
                <div className = "thumbHolder">
                    <img className = "postUserThumb" src = {props.post.thumbnailUrl} alt = "" />
                </div>
                <span className = "postUserName">{props.post.username}</span>
            </div>
            <img className = "image" src = {props.post.imageUrl} alt = "" />
            <span className = "likes">{props.post.likes} likes</span>
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