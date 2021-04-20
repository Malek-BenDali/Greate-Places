import {ADD_PLACE} from './placesAction';
import Place from '../models/place';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const {title, imageUri} = action.payload;
      const newPlace = new Place(new Date().toString(), title, imageUri);
      return {
        places: [...state.places, newPlace],
      };
    default:
      return state;
  }
};
