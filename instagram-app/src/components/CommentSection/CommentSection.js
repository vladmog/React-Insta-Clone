import React from 'react';
import PropTypes from 'prop-types';


const CommentSection = props => {
    console.log('commentsection: ', props)
    return (
        <div>
            <span>{props.comment.username}</span>
            <span>{props.comment.text}</span>
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