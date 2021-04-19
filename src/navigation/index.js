import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  MapScreen,
  NewPlaceScreen,
  PlaceDetailScreen,
  PlacesListScreens,
} from '../screens';
import {colors} from '../constants';

const Stack = createStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.white,
};

export default () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Places" component={PlacesListScreens} />
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="newPlace" component={NewPlaceScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
