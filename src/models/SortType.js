const SortType = {
  best_match: 'best_match',
  newest: 'newest',
  rating_average: 'rating_average',
  distance: 'distance',
  popularity: 'popularity',
  average_price: 'average_price',
  delivery_cost: 'delivery_cost',
  minimum_cost: 'minimum_cost',
  top_restaurants: 'top_restaurants'
};

export const translateSortType = (sortType) => {
  switch (sortType) {
    case SortType.delivery_cost:
      return 'Delivery cost';
    case SortType.distance:
      return 'Distance';
    case SortType.minimum_cost:
      return 'Minimum cost';
    case SortType.newest:
      return 'Newest';
    case SortType.popularity:
      return 'Popularity';
    case SortType.rating_average:
      return 'Rating';
    case SortType.best_match:
      return 'Best match';
    case SortType.average_price:
      return 'Average price';
    case SortType.top_restaurants:
      return 'Top restaurants';
  }
};

export default SortType;
