import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PlaceDetailScreen = ({navigation, route}) => {
  const {title, id} = route.params;
  useEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    });
  }, []);

  return (
    <View>
      <Text>PlaceDetailScreen PlaceDetailScreen</Text>
    </View>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({});
