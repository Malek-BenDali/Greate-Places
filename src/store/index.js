import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';

import PlacesReducer from './placesReducer';

const rootReducer = combineReducers({
  places: PlacesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
