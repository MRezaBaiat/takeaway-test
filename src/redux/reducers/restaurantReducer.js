import * as actions from '../actions/restaurantActions';
import { Restaurant } from '../../inter/Restaurant';
import data from '../../assets/data';
import SortType from '../../inter/SortType';
import RestaurantsController from '../../controllers/RestaurantsController';

export interface InitialState {
  restaurants: Restaurant[],
  filterKeyword: string,
  sortType: string,
  favourites: string[]
}

export const initialState: InitialState = {
  restaurants: data.restaurants.map(RestaurantsController.initRestaurant),
  filterKeyword: '',
  sortType: SortType.minimum_cost,
  favourites: RestaurantsController.getFavourites()
};

const restaurantReducer = (state = initialState, action: { type: any, payload: any }) => {
  switch (action.type) {
    case actions.ACTION_SET_FILTER:
      return {
        ...state,
        filterKeyword: action.payload
      };
    case actions.ACTION_SET_SORTTYPE:
      return {
        ...state,
        sortType: action.payload
      };
    case actions.ACTION_SET_FAVOURITE:
      return {
        ...state,
        favourites: action.payload
      };

    default:
      return state;
  }
};

export default restaurantReducer;
