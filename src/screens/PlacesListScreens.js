import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {CustomHeaderButton} from '../components';
import {colors} from '../constants';

const PlacesListScreens = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'All Products',
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
  }, [navigation]);
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <View>
        <Text>PlacesListScreens PlacesListScreens</Text>
      </View>
    </>
  );
};

export default PlacesListScreens;

const styles = StyleSheet.create({});
