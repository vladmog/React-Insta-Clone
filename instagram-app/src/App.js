import React from 'react';
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
     //console.log('state: ', this.state.dataArray)
      return (
        <div className="App">
          <SearchBar />
          {this.state.dataArray.map(post => {
                return(
                    <div key = {post.id}>
                        <p>START</p>
                        <PostContainer post = {post}/>
                        <p>END</p>
                    </div>
                )
            })}
        </div>
      );
    }
  
}

export default App;
