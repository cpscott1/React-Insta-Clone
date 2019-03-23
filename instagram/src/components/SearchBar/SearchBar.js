import React from 'react';


const SearchBar = (props) => {
  return (
    <form>
      <input type="text"
      name="textInput"
      placeholder="Search"
      onChange={props.handleSearch}
      value={props.textInput}
      />
    </form>
  )
}


export default SearchBar;
