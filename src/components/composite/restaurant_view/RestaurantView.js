import React from 'react';
import type { Restaurant } from '../../../inter/Restaurant';
import './styles.css';
import R from '../../../assets/R';
import SortType from '../../../inter/SortType';

interface Props{
  restaurant: Restaurant,
  sortType: string,
  onFavouriteChanged: (isFavourite: boolean)=>void
}
function RestaurantView (props: Props) {
  const { restaurant, sortType, onFavouriteChanged } = props;
  return (
    <div className={'restaurant-view-container'}>
      <div>
        <img className={'restaurant-view-img'} src={R.images.ic_restaurant}/>
      </div>
      <div className={'restaurant-view-info-container'} >
        <div style={{ flexDirection: 'row' }}>
          <div className={'restaurant-view-name'}>
            {restaurant.name}
          </div>
          <img onClick={() => { onFavouriteChanged(!restaurant.isFavourite()); }} className={'restaurant-view-favourite-img'} src={restaurant.isFavourite() ? R.images.favourite_on : R.images.favourite_off}/>
        </div>
        <div className={restaurant.status === 'open' ? 'restaurant-view-status-open' : restaurant.status === 'closed' ? 'restaurant-view-status-closed' : 'restaurant-view-status-orderahead'}>
          {
            restaurant.status
          }
        </div>
        <div className={'restaurant-view-info'}>
          {
            infoBasedOnSortType(restaurant, sortType)
          }
        </div>
      </div>
    </div>
  );
}

const infoBasedOnSortType = (restaurant: Restaurant, sortType: string) => {
  const { sortingValues } = restaurant;
  switch (sortType) {
    case SortType.delivery_cost:
      return 'Delivery cost : ' + sortingValues.deliveryCosts + ' $';
    case SortType.distance:
      return 'Distance : ' + sortingValues.distance + ' M';
    case SortType.minimum_cost:
      return 'Cost : ' + sortingValues.minCost + ' $';
    case SortType.newest:
      return 'Newest : ' + sortingValues.newest;
    case SortType.popularity:
      return 'Popularity : ' + sortingValues.popularity;
    case SortType.rating_average:
      return 'Rating : ' + sortingValues.ratingAverage;
    case SortType.best_match:
      return 'Best match : ' + sortingValues.bestMatch;
    case SortType.average_price:
      return 'Average price : ' + sortingValues.averageProductPrice + ' $';
    case SortType.top_restaurants:
      return 'Top restaurants : ' + sortingValues.topRestaurants;
  }
};

export default React.memo(RestaurantView);
