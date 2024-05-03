// Search.js
import React from "react";

function Search({ onSearch }) {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
