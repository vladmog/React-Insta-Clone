import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';
import './PostContainer.css'


class PostContainer extends React.Component {
    // console.log('postcontainer props: ', props)
    state= {

    };
    render(){
        return (
            <div className = "post">
                <div className = "poster">
                    <div className = "thumbHolder">
                        <img className = "postUserThumb" src = {this.props.post.thumbnailUrl} alt = "" />
                    </div>
                    <span className = "postUserName">{this.props.post.username}</span>
                </div>
                <img className = "image" src = {this.props.post.imageUrl} alt = "" />
                <span className = "likes">{this.props.post.likes} likes</span>
                {/* {props.post.comments.map(comment => {
                    return (
                        <div key = {comment.id}>
                            <CommentSection comment = {comment}/>
                        </div>
                    )
                })} */}
                <CommentSection commentsArray = {this.props.post.comments} />
                
            </div>
        )
    }
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