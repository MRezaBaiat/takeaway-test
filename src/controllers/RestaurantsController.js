import { Restaurant } from '../inter/Restaurant';

const getFavourites = (): string[] => {
  return JSON.parse(localStorage.getItem('favourites')) || [];
};

const saveFavourites = (favourites: string[]) => {
  localStorage.setItem('favourites', JSON.stringify(favourites));
};

const initRestaurant = (restaurant: Restaurant) => {
  const { sortingValues } = restaurant;
  restaurant.isFavourite = () => {
    return require('../redux/Store').default.getState().restaurantsReducer.favourites.indexOf(restaurant.name) !== -1;
  };
  sortingValues.topRestaurants = (sortingValues.distance * sortingValues.popularity) * sortingValues.ratingAverage;
  return restaurant;
};

export default {
  getFavourites,
  saveFavourites,
  initRestaurant
};
