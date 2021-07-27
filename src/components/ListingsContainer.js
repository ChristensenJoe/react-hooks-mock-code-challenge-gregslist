import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, setListings, search, isSorted}) {

  function handleDeleteListing(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
      setListings((listings) => 
        listings.filter((listing) => {
          if(listing.id===id) return false;
          return true;
        })
      )
    })
  }

  const filteredListings = listings.filter((listing) => {
    if(listing.description.toLowerCase().includes(search.toLowerCase())) return true;
    return false;
  })

  let sortedAndFilteredListings = filteredListings
  if(isSorted) {
    sortedAndFilteredListings.sort((a,b) => (a.location>b.location)? 1 : -1);
  }
  else {
    sortedAndFilteredListings = filteredListings;
  }



  return (
    <main>
      <ul className="cards">
        {sortedAndFilteredListings.map((listing) => {
          return (
            <ListingCard 
              image={listing.image}
              description={listing.description}
              location={listing.location}
              onDeleteClick={handleDeleteListing}
              id={listing.id}
              key={listing.id}
            />
          )
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
