import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PlacesListScreens = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'All Products',
    });
  }, [navigation]);
  return (
    <View>
      <Text>PlacesListScreens PlacesListScreens</Text>
    </View>
  );
};

export default PlacesListScreens;

const styles = StyleSheet.create({});
