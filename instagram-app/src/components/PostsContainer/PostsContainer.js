import React from 'react';
import CommentSection from '../CommentSection/CommentSection'
import PropTypes from 'prop-types';
import './PostContainer.css'

//##################################################################################

// const UserThumbnail = styled.img ``
// const Username = styled.span ``

//##################################################################################



class PostContainer extends React.Component {
    // console.log('postcontainer props: ', props)
    state= {
        likes: 0,
        liked: false
    };

    componentDidMount(){
        this.setState({
            likes: this.props.post.likes
        })
    }

    likeIncrement = e => {
        e.preventDefault()
        if (this.state.liked === false){
            this.setState(prevState =>({
                likes: prevState.likes + 1,
                liked: true
            }))
        }else{
            this.setState(prevState => ({
                likes: prevState.likes - 1,
                liked: false
            }))
        }

    }


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
                <div className = "postActions">
                    <img 
                        className = "postActionBtn" 
                        src={require('./like.jpg')} 
                        alt = ""
                        onClick = {this.likeIncrement}
                     />
                    <img className = "postActionBtn" src={require('./comment.jpg')} alt = "" />
                </div>
                <span className = "likes">{this.state.likes} likes</span>
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