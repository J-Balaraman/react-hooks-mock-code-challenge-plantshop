import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
