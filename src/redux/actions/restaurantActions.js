import type { Restaurant } from '../../models/Restaurant';
import RestaurantsController from '../../controllers/RestaurantsController';

export const ACTION_SET_FILTER = 'ACTION_SET_FILTER';
export const ACTION_SET_SORTTYPE = 'ACTION_SET_SORTTYPE';
export const ACTION_SET_FAVOURITE = 'ACTION_SET_FAVOURITE';

export function setFilter (filter: string) {
  return {
    type: ACTION_SET_FILTER,
    payload: filter
  };
}

export function setSortType (sortType: string) {
  return {
    type: ACTION_SET_SORTTYPE,
    payload: sortType
  };
}

export function setFavourite (restaurant: Restaurant, isFavourite: boolean) {
  return (dispatch, getState) => {
    const favourites = [...getState().restaurantsReducer.favourites];
    isFavourite && favourites.indexOf(restaurant.name) === -1 && favourites.push(restaurant.name) && RestaurantsController.saveFavourites(favourites);
    !isFavourite && favourites.indexOf(restaurant.name) !== -1 && favourites.splice(favourites.indexOf(restaurant.name), 1) && RestaurantsController.saveFavourites(favourites);

    dispatch({
      type: ACTION_SET_FAVOURITE,
      payload: favourites
    });
  };
}
