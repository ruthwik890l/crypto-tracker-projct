import React from 'react';
import './Search.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({ search, onSearchChange }) => {
  return (
    <div className="search-flex">
      <SearchRoundedIcon style={{ color: 'var(--white)', fontSize: '2.5rem' }} />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
};

export default Search;
