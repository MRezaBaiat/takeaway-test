import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFavourite, setFilter, setSortType } from './redux/actions/restaurantActions';
import { getSortTypeSelector } from './redux/selectors/restaurantsSelector';
import SortType, { translateSortType } from './inter/SortType';
import AppDropDown from './components/base/app_dropdown/AppDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import RestaurantView from './components/composite/restaurant_view/RestaurantView';
import AppInput from './components/composite/app_input/AppInput';
import AppList from './components/composite/app_list/AppList';
import type { Restaurant } from './inter/Restaurant';

function App () {
  const sortType = useSelector(state => state.restaurantsReducer.sortType);
  const reselectData: any = useSelector(getSortTypeSelector(sortType));
  const dispatch = useDispatch();

  return (
    <div className="container">
      <AppInput
        className={'search-input'}
        placeHolder={'Search for restaurants...'}
        onChange={(text) => { dispatch(setFilter(text)); }}/>
      <div className={'sort-container'}>
        <div>
              Sort by:
        </div>
        <AppDropDown
          className={'dropdown-menu'}
          value={sortType}
          data={Object.keys(SortType)}
          onChange={(sortType) => { dispatch(setSortType(sortType)); }}
          render={(sortType) => {
            return (
              <MenuItem style={{ width: 200 }} key={sortType} value={sortType}>{translateSortType(sortType)}</MenuItem>
            );
          }}
        />
      </div>
      <AppList
        className={'list'}
        items={reselectData}
        render={(restaurant: Restaurant) => {
          return <RestaurantView onFavouriteChanged={(isFavourite) => { dispatch(setFavourite(restaurant, isFavourite)); }} key={restaurant.name} restaurant={restaurant} sortType={sortType}/>;
        }}
      />
    </div>
  );
}

export default App;
