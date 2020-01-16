import SortType from '../models/SortType';
import data from '../assets/data';
import Restaurant from '../models/Restaurant';

const filterers = {

};

const lowestFirst = (key1, key2) => {
  return key1 - key2;
};

const highestFirst = (key1, key2) => {
  return key2 - key1;
};

filterers[SortType.average_price] = (state) => {
  return data.restaurants.sort((obj1: Restaurant, obj2: Restaurant) => {
    return lowestFirst(obj1.sortingValues.averageProductPrice, obj2.sortingValues.averageProductPrice);
  });
};

filterers[SortType.best_match] = (state) => {
  return data.restaurants.sort((obj1: Restaurant, obj2: Restaurant) => {
    return highestFirst(obj1.sortingValues.bestMatch, obj2.sortingValues.bestMatch);
  });
};

filterers[SortType.delivery_cost] = (state) => {
  return data.restaurants.sort((obj1: Restaurant, obj2: Restaurant) => {
    return lowestFirst(obj1.sortingValues.deliveryCosts, obj2.sortingValues.deliveryCosts);
  });
};

filterers[SortType.distance] = (state) => {
  return data.restaurants.sort((obj1: Restaurant, obj2: Restaurant) => {
    return lowestFirst(obj1.sortingValues.distance, obj2.sortingValues.distance);
  });
};

filterers[SortType.minimum_cost] = (state) => {
  return data.restaurants.sort((obj1: Restaurant, obj2: Restaurant) => {
    return lowestFirst(obj1.sortingValues.minCost, obj2.sortingValues.minCost);
  });
};

filterers[SortType.newest] = (state) => {
  return data.restaurants.sort((obj1: Restaurant, obj2: Restaurant) => {
    return highestFirst(obj1.sortingValues.newest, obj2.sortingValues.newest);
  });
};

filterers[SortType.popularity] = (state) => {
  return data.restaurants.sort((obj1: Restaurant, obj2: Restaurant) => {
    return highestFirst(obj1.sortingValues.popularity, obj2.sortingValues.popularity);
  });
};

filterers[SortType.rating_average] = (state) => {
  return data.restaurants.sort((obj1: Restaurant, obj2: Restaurant) => {
    return highestFirst(obj1.sortingValues.ratingAverage, obj2.sortingValues.ratingAverage);
  });
};

export default filterers;
