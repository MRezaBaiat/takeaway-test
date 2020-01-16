import { combineReducers, configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import authReducer from '../redux/reducers/auth_reducer';
import userReducer from '../redux/reducers/users_reducer';
import reducer from '../redux/reducers/reducer';

const rootReducer = combineReducers({
  global: reducer,
  authReducer: authReducer,
  userReducer: userReducer
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
    module.hot.accept('../redux/reducers/auth_reducer', () => store.replaceReducer(authReducer));
    module.hot.accept('../redux/reducers/users_reducer', () => store.replaceReducer(userReducer));
    module.hot.accept('../redux/reducers/reducer', () => store.replaceReducer(reducer));
  }

  return store;
}
