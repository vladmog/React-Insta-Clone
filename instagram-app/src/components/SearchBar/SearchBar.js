import React from 'react';
import './SearchBar.css';
import PropTypes from 'prop-types';

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

SearchBar.propTypes = {
  searchBarFilter: PropTypes.func.isRequired
}

export default SearchBar;


