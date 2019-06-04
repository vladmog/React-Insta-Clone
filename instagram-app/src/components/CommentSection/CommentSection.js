import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'
import Comment from "../Comment/Comment"

const CommentSection = props => {
    // console.log('commentsection props: ', props)
    //prop: commentsArray
    return (
        <div>
            {props.commentsArray.map(comment => {
                return (
                    <div key = {comment.id}>
                        <Comment comment = {comment}/>
                    </div>
                )
            })} 
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