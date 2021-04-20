import React, {useState} from 'react';
import {StyleSheet, Button, Image, Text, View} from 'react-native';
import {colors} from '../constants';
import {launchCamera} from 'react-native-image-picker';
const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const takeImageHandler = () => {
    launchCamera(
      {
        quality: 0.5,
      },
      response => {
        if (response.didCancel) {
          console.log('Benutzer hat abgesagt');
        } else if (response.errorMessage) {
          console.log(response.errorMessage);
        } else {
          setPickedImage(response.uri);
        }
      },
    );
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text style={{backgroundColor: 'white'}}>No Image picked yet</Text>
        ) : (
          <Image style={styles.image} source={{uri: pickedImage}} />
        )}
      </View>
      <Button
        title="Take Image"
        color={colors.primary}
        onPress={takeImageHandler}
      />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    margin: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
