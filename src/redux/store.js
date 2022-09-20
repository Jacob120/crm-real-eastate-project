import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import accountingReducer from './accountingRedux';


const subreducers = {
  // adminDrawerCategories: drawerReducer,
  accountingData: accountingReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
