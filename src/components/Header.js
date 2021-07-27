import React from "react";
import Search from "./Search";
import Sort from "./Sort";

function Header({onSearchChange, search, isSorted, setIsSorted}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        onSearchChange={onSearchChange}
        search={search}
      />
      <Sort 
        isSorted={isSorted}
        setIsSorted={setIsSorted}
      />
    </header>
  );
}

export default Header;
