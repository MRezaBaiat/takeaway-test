import React from 'react';
import filterers from '../src/config/Filterers';
import rawData from '../src/assets/data';
import RestaurantsController from '../src/controllers/RestaurantsController';

test('renders learn react link', () => {
  const data = rawData.restaurants.map(RestaurantsController.initRestaurant);
  expect(data);
});
