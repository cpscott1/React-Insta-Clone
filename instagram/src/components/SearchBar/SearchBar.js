import React from 'react';


const SearchBar = (props) => {
  return (
    <form>
      <input type="text"
      name="textInput"
      placeholder="Search"
      value={props.textInput}
      />
    </form>
  )
}


export default SearchBar;
