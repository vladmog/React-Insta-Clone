import React from 'react';

console.log(posts)
const withAuthenticate = (Domponent) => {
    class Domponent extends React.Component {
        render(){
            return(
             <Domponent dataArray = {posts.dataArray} />
            )
        }
    }
}



export default withAuthenticate;


// - Inside of `withAuthenticate's` render method, you'll want to return the Component that gets passed into it.