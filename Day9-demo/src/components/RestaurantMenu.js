import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import { SWIGGY_MENU_URL } from "../utils/constants";

const RestaurantsMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const data = await fetch(`${SwIGGYRES_URL}/${resId}`);
    const jsonData = await data.json();
    setRestaurantData(jsonData?.data);
  };

  if (restaurantData === null) {
    return <Shimmer />;
  }

  const { name, areaName, cuisines, sla, avgRating } =
    restaurantData?.cards[0]?.card?.card?.info;
  const itemsCards =
    restaurantData?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  return (
    <div className="body">
      <h1>{name}</h1>
      <h2>{cuisines}</h2>
      <p>{`${sla?.deliveryTime} mins`}</p>
    </div>
  );
};

export default RestaurantsMenu;