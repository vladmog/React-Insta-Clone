import React from 'react';


const withAuthenticate = (PostsPage) => (LoginPage) => 
//  console.log(props)
    class extends React.Component {
        state = {
            loggedIn: false
        }

        componentDidMount(){
            if (localStorage.getItem("username") && localStorage.getItem("password")){
                this.setState({
                    loggedIn: true
                })
            }
        }

        render(){
            if (this.state.loggedIn === true){
                return(
                    <PostsPage dataArray = {this.props.dataArray} />
                )
            }else{
                return(
                    <LoginPage />
                )
            }
        }
    }




export default withAuthenticate;


// - Inside of `withAuthenticate's` render method, you'll want to return the Component that gets passed into it.