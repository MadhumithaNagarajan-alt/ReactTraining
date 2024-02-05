import { useState } from "react";
import RestaurantCard from "./RestaurantCard"
import { resList } from "./utils/mockData";
const Body = () => {
 
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  
  
  return (
    <div className="body">
      <div className="filter">

        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info?.avgRating > 4.4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((resObj) => (
          <RestaurantCard resData={resObj} />
        ))}
      </div>
    </div>
  );
};

export default Body;