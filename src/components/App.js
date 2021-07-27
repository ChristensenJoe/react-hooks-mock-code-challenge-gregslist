import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState(null);
  const [search, setSearch] = useState("");
  const [isSorted, setIsSorted] = useState(false);

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(res => res.json())
      .then(data => setListings(data));
  }, [])

  return (
    <div className="app">
      <Header
        onSearchChange={handleSearch}
        search={search}
        isSorted={isSorted}
        setIsSorted={setIsSorted}
      />
      {
        listings &&
        <ListingsContainer
          listings={listings}
          setListings={setListings}
          search={search}
          isSorted={isSorted}
        />
      }
    </div>
  );
}

export default App;
