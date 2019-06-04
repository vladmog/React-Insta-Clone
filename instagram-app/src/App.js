import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      dataArray: dummyData
    }
  }
    
    render(){
     //console.log(this.state.dataArray)
      return (
        <div className="App">
          <SearchBar />
          <PostContainer dataArray = {this.state.dataArray} />
        </div>
      );
    }
  
}

export default App;
