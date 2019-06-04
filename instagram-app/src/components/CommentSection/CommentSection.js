import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'

const CommentSection = props => {
    // console.log('commentsection props: ', props)
    return (
        <div className = "comment">
            <span className = "commentUserName">{props.comment.username}</span>
            <span className = "commentText">{props.comment.text}</span>
        </div>
    )
}


CommentSection.propTypes = {
    comment: PropTypes.shape ({
        id: PropTypes.number.isRequired,
        username: PropTypes.string,
        text: PropTypes.string
    })
}



export default CommentSection;