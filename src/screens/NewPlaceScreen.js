import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  TextInput,
} from 'react-native';
import {colors} from '../constants';
import {useDispatch} from 'react-redux';
import {addPlace} from '../store/placesAction';
import {useNavigation} from '@react-navigation/native';
import {ImagePicker} from '../components';

const NewPlaceScreen = () => {
  const [titleValue, setTitleValue] = useState('');
  const [SelectedImage, setSelectedImage] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const titleChangeHandler = text => {
    setTitleValue(text);
  };
  const savePlaceHandler = () => {
    dispatch(addPlace(titleValue, SelectedImage));
    navigation.goBack();
  };

  const imageTakenHandler = imagePath => {
    setSelectedImage(imagePath);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.form}>
          <Text style={styles.label}>title</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={titleChangeHandler}
            value={titleValue}
          />
          <ImagePicker onImageTaken={imageTakenHandler} />
          <Button
            title="Save Place"
            color={colors.primary}
            onPress={() => {
              savePlaceHandler();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default NewPlaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});
