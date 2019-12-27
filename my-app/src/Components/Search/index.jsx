import React from "react";
import PropTypes from 'prop-types';

function Search({ isDisabled, handleSearch }) {
  return (
    <div className="search">
      <input type="search" onKeyUp={handleSearch} disabled={isDisabled} />
    </div>
  );
}

export default Search;

Search.proptype = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}