import React from 'react';
import PostsContainer from './PostsContainer';


class PostsPage extends React.Component {

    render(){
        return(
            <div>
                {this.props.dataArray.map(post => (
                    <div key = {post.id}>
                        <PostsContainer post = {post}/>
                    </div>
                ))}
            </div>
        )
    }
}

export default PostsPage;

{this.state.dataArray.map(post => {
    return(
        <div key = {post.id}>
            <PostsContainer post = {post}/>
        </div>
    )
})}