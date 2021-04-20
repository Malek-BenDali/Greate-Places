export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, imageUri) => async dispatch => {
  const fileName = imageUri.split('/').pop();

  dispatch({
    type: ADD_PLACE,
    payload: {
      title,
      imageUri,
    },
  });
};
