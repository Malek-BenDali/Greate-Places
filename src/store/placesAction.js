export const ADD_PLACE = 'ADD_PLACE';
import * as FileSystem from 'react-native-fs';

export const addPlace = (title, imageUri) => async dispatch => {
  const fileName = imageUri.split('/').pop();
  const newPath = FileSystem.DocumentDirectoryPath + fileName;
  try {
    await FileSystem.moveFile(imageUri, newPath);
  } catch (err) {
    console.log(err);
  }
  dispatch({
    type: ADD_PLACE,
    payload: {
      title,
      imageUri,
    },
  });
};
