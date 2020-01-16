import SortType from '../inter/SortType';
import { InitialState } from '../redux/reducers/restaurantReducer';
import { Restaurant } from '../inter/Restaurant';

const filterers = {};

const lowestFirst = (key1, key2) => {
  return key1 - key2;
};

const highestFirst = (key1, key2) => {
  return key2 - key1;
};

const generalSort = (data: Restaurant[]) => {
  return data;
};

const filter = (data: [], filterKeyword: string) => {
  if (!filterKeyword || filterKeyword === '') {
    return [...data];
  }
  filterKeyword = filterKeyword.toLowerCase();
  return data.filter((restaurant: Restaurant) => restaurant.name.toLowerCase().includes(filterKeyword));
};

export const compare = (restaurant1: Restaurant, restaurant2: Restaurant, sortingScore = 0) => {
  if (restaurant1.isFavourite() !== restaurant2.isFavourite()) {
    return restaurant1.isFavourite() ? -1 : 1;
  }
  if (restaurant1.status !== restaurant2.status) {
    return restaurant1.status === 'open' ? -1 : restaurant2.status === 'open' ? 1 : restaurant1.status === 'order ahead' ? -1 : 1;
  }
  if (sortingScore !== 0) {
    return sortingScore;
  }
  return 0;
};

filterers[SortType.top_restaurants] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, highestFirst(obj1.sortingValues.topRestaurants, obj2.sortingValues.topRestaurants));
  }));
};

filterers[SortType.average_price] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, lowestFirst(obj1.sortingValues.averageProductPrice, obj2.sortingValues.averageProductPrice));
  }));
};

filterers[SortType.best_match] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, highestFirst(obj1.sortingValues.bestMatch, obj2.sortingValues.bestMatch));
  }));
};

filterers[SortType.delivery_cost] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, lowestFirst(obj1.sortingValues.deliveryCosts, obj2.sortingValues.deliveryCosts));
  }));
};

filterers[SortType.distance] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, lowestFirst(obj1.sortingValues.distance, obj2.sortingValues.distance));
  }));
};

filterers[SortType.minimum_cost] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, lowestFirst(obj1.sortingValues.minCost, obj2.sortingValues.minCost));
  }));
};

filterers[SortType.newest] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, highestFirst(obj1.sortingValues.newest, obj2.sortingValues.newest));
  }));
};

filterers[SortType.popularity] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, highestFirst(obj1.sortingValues.popularity, obj2.sortingValues.popularity));
  }));
};

filterers[SortType.rating_average] = (state: InitialState) => {
  const data = filter(state.restaurants, state.filterKeyword);
  return generalSort(data.sort((obj1: Restaurant, obj2: Restaurant) => {
    return compare(obj1, obj2, highestFirst(obj1.sortingValues.ratingAverage, obj2.sortingValues.ratingAverage));
  }));
};

export default filterers;
