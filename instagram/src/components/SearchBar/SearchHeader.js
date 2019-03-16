import React from 'react';
import FeatherIcon from 'feather-icons-react';
import SearchBar from './SearchBar';

const SearchHeader = () => {
   return (
     <header>
      <FeatherIcon icon='instagram' />
      <h1>Instagram</h1>
      <SearchBar />
      <FeatherIcon icon="compass" />
      <FeatherIcon icon="heart" />
      <FeatherIcon icon="user" />

    </header>
   )
}

export default SearchHeader;
