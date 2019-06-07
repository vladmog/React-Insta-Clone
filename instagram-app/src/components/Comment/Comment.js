import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css'

const Comment = props => {
    // console.log('commentsection props: ', props)
    //prop: commentsArray
    return (
        <div className = "comment">
            <span className = "commentUserName">{props.comment.username}</span>
            <span className = "commentText">{props.comment.text}</span>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        id: PropTypes.number.isRequired,
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Comment;