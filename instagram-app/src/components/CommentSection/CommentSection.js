import React from 'react';
import PropTypes from 'prop-types';
import './CommentSection.css'
import Comment from "../Comment/Comment"

class CommentSection extends React.Component {
    // console.log('commentsection props: ', props)
    //prop: commentsArray
    state = {
        commentsArray: [],
        commentInput: "Add comment..."
    }

    componentDidMount(){
        this.setState({
          commentsArray: this.props.commentsArray
        })
    }

    handleChange = e => {
        e.preventDefault();
        console.log("Didn't refresh yet")
        this.setState({
            [e.target.name]: e.target.value
         });
    };

    addNewComment = e => {
        e.preventDefault();
        this.setState(prevState => ({
            commentsArray: [...prevState.commentsArray,
                {id: prevState.commentsArray.length + 1,
                username: "lightcatch",
                text: prevState.commentInput}],
            commentInput: "Add comment..."
        }))
        e.target.reset()
    }  

   

    render(){
        return (
            <div>
                {this.state.commentsArray.map(comment => {
                    return (
                        <div key = {comment.id}>
                            <Comment comment = {comment}/>
                        </div>
                    )
                })} 

                <form onSubmit = {this.addNewComment}>
                    <input 
                        name = "commentInput"
                        placeholder = {this.state.commentInput}
                        onChange = {this.handleChange}
                    />
                   
                </form>
            </div>
        )
    }
}

CommentSection.propTypes = {
    commentsArray: PropTypes.arrayOf(PropTypes.object)
}





export default CommentSection;