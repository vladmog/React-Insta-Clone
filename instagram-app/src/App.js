import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


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
    const newFilteredArray = this.state.dataArray.filter(
      postObject => postObject.username === searchTerm
    );
    this.setState({
      dataArray: newFilteredArray
    });
  };
    
  render(){
    //console.log('state: ', this.state.dataArray)
    return (
      <div className="App">
        <SearchBar searchBarFilter = {this.searchBarFilter} />
        {this.state.dataArray.map(post => {
              return(
                  <div key = {post.id}>
                      <PostContainer post = {post}/>
                  </div>
              )
          })}
      </div>
    );
  }
  
}

export default App;
