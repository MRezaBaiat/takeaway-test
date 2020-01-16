import React from 'react';
import RestaurantsController from '../controllers/RestaurantsController';
import data from '../assets/data';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import SortType, { translateSortType } from '../inter/SortType';
import App from '../App';
import { Provider } from 'react-redux';
import { unmountComponentAtNode } from 'react-dom';
import { configure, shallow } from 'enzyme';
import AppDropDown from '../components/base/app_dropdown/AppDropDown';
import MenuItem from '@material-ui/core/MenuItem';
import { setFilter, setSortType } from '../redux/actions/restaurantActions';
import AppList from '../components/composite/app_list/AppList';
import { getSortTypeSelector } from '../redux/selectors/restaurantsSelector';
import { initialState } from '../redux/reducers/restaurantReducer';
import { compare } from '../config/Filterers';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  restaurantsReducer: {
    restaurants: data.restaurants.map(RestaurantsController.initRestaurant),
    filterKeyword: '',
    sortType: SortType.minimum_cost,
    favourites: RestaurantsController.getFavourites()
  }
});

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders correctly', () => {
  expect(shallow(<Provider store={store}><App/></Provider>)).toMatchSnapshot();
});

it('testing drop down menu', () => {
  const wrapper = shallow(<AppDropDown
    value={SortType.minimum_cost}
    data={Object.keys(SortType)}
    render={(sortType) => {
      return (
        <MenuItem style={{ width: 200 }} key={sortType} value={sortType}>{translateSortType(sortType)}</MenuItem>
      );
    }}
  />);
  expect(wrapper.text()).toEqual('Best matchNewestRatingDistancePopularityAverage priceDelivery costMinimum costTop restaurants');
});

it('selector type test', () => {
  Object.keys(SortType).forEach((sortType) => {
    expect(getSortTypeSelector(sortType)).not.toBeNull();
  });
});

it('testing list', () => {
  const render = jest.fn();
  const restaurants = store.getState().restaurantsReducer.restaurants;
  shallow(<AppList
    className={'list'}
    items={restaurants}
    render={render}
  />);
  expect(render).toHaveBeenCalledTimes(restaurants.length);
});

it('testing redux', () => {
  const reducer = require('../redux/reducers/restaurantReducer').default;
  expect(reducer(undefined, setFilter('some restaurant'))).toEqual({ ...initialState, filterKeyword: 'some restaurant' });
  expect(reducer(undefined, setSortType(SortType.newest))).toEqual({ ...initialState, sortType: SortType.newest });
});

it('testing filterers', () => {
  const original = { isFavourite: () => false, status: 'open' };
  expect(compare(original, original)).toEqual(0);
  expect(compare(original, original, 55)).toEqual(55);
  expect(compare({ ...original, status: 'closed' }, { ...original, status: 'open' })).toEqual(1);
  expect(compare({ ...original, status: 'open' }, { ...original, status: 'closed' })).toEqual(-1);
  expect(compare({ ...original, isFavourite: () => true }, original)).toEqual(-1);
  expect(compare(original, { ...original, isFavourite: () => true })).toEqual(1);
});
