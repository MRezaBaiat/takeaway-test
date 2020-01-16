import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import restaurantsReducer from '../redux/reducers/restaurantReducer';
import globalReducer from '../redux/reducers/globalReducer';

const rootReducer = combineReducers({
  global: globalReducer,
  restaurantsReducer: restaurantsReducer
});

export default function initStore (preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,
    enhancers: []
  });

  // adding HOT reloading capability
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('../redux/reducers/globalReducer', () => store.replaceReducer(globalReducer));
    module.hot.accept('../redux/reducers/restaurantReducer', () => store.replaceReducer(restaurantsReducer));
  }

  return store;
}
