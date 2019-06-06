import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostsContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/Login/Login';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dataArray: []
    }
  }

  componentDidMount(){
    this.setState({
      dataArray: dummyData
    })
  }

  searchBarFilter = searchTerm => {
    if (searchTerm === ""){
      this.setState({
        dataArray: dummyData
      })
    }else{
      const newFilteredArray = this.state.dataArray.filter(
        postObject => postObject.username === searchTerm
      );
      this.setState({
        dataArray: newFilteredArray
      });
    }
  };
    
  render(){
    //console.log('state: ', this.state.dataArray)
    return (
      <div className="App">
        <SearchBar searchBarFilter = {this.searchBarFilter} />
        <ComponentFromWithAuthenticate dataArray = {this.state.dataArray} />  
      </div>
    );
  }
  
}

export default App;


