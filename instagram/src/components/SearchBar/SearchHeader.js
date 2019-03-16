import React from 'react';
import FeatherIcon from 'feather-icons-react';
import './SearchBar.css';
import SearchBar from './SearchBar';

const SearchHeader = () => {
   return (
     <header className='header-container'>
      <div className='left'>
        <div className="left-icon">
        <FeatherIcon icon='instagram' />
        </div>
        <h1>Instagram</h1>
      </div>
      <div className="center">
      <SearchBar />
      </div>
      <div className='right'>
        <div className='right-icons'>
        <FeatherIcon icon='compass' />
        </div>
        <div className='right-icons'>
        <FeatherIcon icon='heart' />
        </div>
        <div className='right-icons'>
        <FeatherIcon icon='user' />
        </div>
      </div>
    </header>
   )
}

export default SearchHeader;
