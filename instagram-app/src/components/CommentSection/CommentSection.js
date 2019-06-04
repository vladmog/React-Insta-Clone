import React from 'react';


const CommentSection = props => {
    console.log('commentsection: ', props)
    return (
        <div>
            {props.comments.map(comment => {
                return(
                    <div key = {Math.random()}>
                        <p>{comment.text}</p>
                    </div>
                )
            })}
        </div>
    )
}



export default CommentSection;