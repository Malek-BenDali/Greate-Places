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

const LocationPicker = props => {
  const [pickedLocation, setPickedLocation] = useState();
  const [isFetching, setIsFetching] = useState(false);
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
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        {isFetching ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <MapPreview style={styles.mapPreview} location={pickedLocation} />
        )}
      </View>
      <Button
        title="Get User Location"
        color={colors.primary}
        onPress={() => {
          getLocationHandler();
        }}
      />
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
});
