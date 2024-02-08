import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  

  const fetchData = async () => {
    try{
    const data = await fetch(SWIGGY_URL);
    const dataJSON = await data.json();
    console.log(json?.data?.card[4]?.card?.card)
    }catch(err){
        console.error("err",err);
    }
}
    // we have to render our page with the new data
    setListOfRestaurants(
      JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
  
  
useEffect(() => {
    fetchData();
  }, []);

  

  /*if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }*/
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info?.avgRating > 4)
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