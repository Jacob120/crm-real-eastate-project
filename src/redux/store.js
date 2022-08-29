import { createStore, combineReducers } from 'redux';
import categoriesReducer from './categoriesRedux';
import initialState from './initialState';
import postsReducer from './postsRedux';

const subreducers = {
  drawerCategories: drawerReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
