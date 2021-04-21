import React, {useState} from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from 'react-native';
import {colors} from '../constants';
import * as Location from 'react-native-location';
import MapPreview from './MapPreview';
import {useNavigation} from '@react-navigation/native';

const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();
  const [isFetching, setIsFetching] = useState(false);
  const navigation = useNavigation();
  const getLocationHandler = async () => {
    setIsFetching(true);
    try {
      const permission = await Location.requestPermission({
        android: {
          detail: 'coarse',
        },
      });
      if (!permission) {
        setIsFetching(false);
        return;
      }
      const coords = await Location.getLatestLocation({timeout: 5000});
      console.log(coords);
      setPickedLocation({
        lat: coords.latitude,
        lng: coords.longitude,
      });
      setIsFetching(false);
    } catch (err) {
      console.log(err);
    }
  };

  const pickOnMapHandler = () => {
    navigation.navigate('Map');
  };
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <MapPreview
            onPress={pickOnMapHandler}
            style={styles.mapPreview}
            location={pickedLocation}
          />
        )}
      </View>
      <View style={styles.actions}>
        <Button
          title="Get User Location"
          color={colors.primary}
          onPress={() => {
            getLocationHandler();
          }}
        />
        <Button
          title="Go to Map"
          color={colors.primary}
          onPress={() => {
            pickOnMapHandler();
          }}
        />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
