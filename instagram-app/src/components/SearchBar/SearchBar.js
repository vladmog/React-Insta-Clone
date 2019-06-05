import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    state = {
      searchTerm: ""
    };
    handleChange = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      });
    };

    searchBarFilter = event => {
        event.preventDefault();
        this.props.searchBarFilter(this.state.searchTerm);
        this.setState({
          searchTerm: ""
        });
      };
  
    render(){
        return (
            <div className = "searchBar">
                <div className = "branding">
                    <img className = "logo" src={require('./glyph.png')} alt = "" />
                    <div className = "vLine"></div>
                    <h1>Instagram</h1>
                </div>

                <form className = "input" onSubmit={this.searchBarFilter} >
                    <input
                        onChange={this.handleChange}
                        placeholder="Search"
                        name="searchTerm"
                        value={this.state.searchTerm}
                    />
                </form>

                <div className = "logos">
                    <img className = "logo" src={require('./explore.jpg')} alt = ""/>
                    <img className = "logo" src={require('./like.jpg')} alt = "" />
                    <img className = "logo" src={require('./user.jpg')} alt = "" />
                </div>
            </div>
        )
    }
}

export default SearchBar;


//########################################################################

// class App extends React.Component {
//     constructor(){
//       super();
//       this.state = {
//         dataArray: dummyData
//       }
//     }
      
//       render(){
//        //console.log('state: ', this.state.dataArray)
//         return (
//           <div className="App">
//             <SearchBar />
//             {this.state.dataArray.map(post => {
//                   return(
//                       <div key = {post.id}>
//                           <PostContainer post = {post}/>
//                       </div>
//                   )
//               })}
//           </div>
//         );
//       }
    
//   }
  
//   export default App;