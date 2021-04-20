import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomHeaderButton, PlaceItem} from '../components';
import {useSelector} from 'react-redux';
import {colors} from '../constants';

const PlacesListScreens = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'All Places',
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item
            title="Add Place"
            iconName="md-add"
            onPress={() => {
              navigation.navigate('newPlace');
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);
  const {places} = useSelector(state => state.places);

  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <FlatList
        data={places}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <PlaceItem
            item={item}
            onSelect={() => {
              navigation.navigate('PlaceDetail', {
                title: item.title,
                imageUri: item.imageUri,
                id: item.id,
              });
            }}
          />
        )}
      />
    </>
  );
};

export default PlacesListScreens;

const styles = StyleSheet.create({});
