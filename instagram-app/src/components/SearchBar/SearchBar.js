import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


//#########################################################################

const Header = styled.div `
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`

const Input = styled.form `
  width: 120px;
  text-align: center;
`

const H1 = styled.h1 `
  font-family: 'Grand Hotel', cursive;
  margin: 0px;
`

const Logos = styled.div `
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`

const Logo = styled.img `
  width: 30px;
  object-fit: contain;
`

const LogoImage = styled(Logo)``

const VLine = styled.div `
  width: 1px;
  height: 30px;
  background-color: grey;
`
const LogoHeader = styled.div `
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 30%;
`

//#########################################################################

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
            <Header>
                <LogoHeader>
                    <LogoImage src={require('./glyph.png')} alt = "" />
                    <VLine></VLine>
                    <H1>Instagram</H1>
                </LogoHeader>

                <Input onSubmit={this.searchBarFilter} >
                    <input
                        onChange={this.handleChange}
                        placeholder="Search"
                        name="searchTerm"
                        value={this.state.searchTerm}
                    />
                </Input>

                <Logos>
                    <Logo src={require('./explore.jpg')} alt = ""/>
                    <Logo src={require('./like.jpg')} alt = "" />
                    <Logo src={require('./user.jpg')} alt = "" />
                </Logos>
            </Header>
        )
    }
}

SearchBar.propTypes = {
  searchBarFilter: PropTypes.func.isRequired
}

export default SearchBar;


