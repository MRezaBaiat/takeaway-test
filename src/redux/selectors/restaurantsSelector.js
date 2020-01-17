import { createSelector } from 'reselect';
import SortType from '../../models/SortType';
import filterers from '../../config/Filterers';

const sortSelectors = {};
Object.keys(SortType).forEach((type) => {
  sortSelectors[type] = createSelector(
    state => state.restaurantsReducer,
    filterers[type]
  );
});

export const getSortTypeSelector = (sortType: SortType) => {
  return sortSelectors[sortType];
};
