import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userDetailsReducer,
  userStatsReducer,
} from 'store/reducers/userReducers';
import { guestLinkReducer } from 'store/reducers/guestReducer';

const reducer = combineReducers({
  userDetails: userDetailsReducer,
  userStats: userStatsReducer,
  guestLinks: guestLinkReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
