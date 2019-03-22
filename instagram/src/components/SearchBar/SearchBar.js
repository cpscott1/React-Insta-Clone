import React from 'react';


const SearchBar = (props) => {
  return (
    <form>
      <input type="text"
      name="textInput"
      placeholder="Search"
      value={props.textInput}
      onChange={this.searchHandler}
      />
    </form>
  )
}


export default SearchBar;
