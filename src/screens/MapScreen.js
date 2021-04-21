import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useRoute, useNavigation} from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {
    pickedLocation: {latitude, longitude},
  } = route.params;
  const [selectedLocation, setselectedLocation] = useState({
    latitude,
    longitude,
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => console.log('saved')}>
          <Text style={styles.headerButtonText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const selectLocationHandler = event => {
    setselectedLocation({
      latitude: event.nativeEvent.coordinate.latitude,
      longitude: event.nativeEvent.coordinate.longitude,
    });
  };

  const markerCoords = {
    latitude: selectedLocation.latitude,
    longitude: selectedLocation.longitude,
  };

  const mapRegion = {
    latitude: selectedLocation.latitude,
    longitude: selectedLocation.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  return (
    <MapView
      style={styles.map}
      region={mapRegion}
      onPress={selectLocationHandler}>
      <Marker title="Picked Location" coordinate={markerCoords} />
    </MapView>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  headerButton: {
    marginHorizontal: 20,
  },
  headerButtonText: {
    color: 'white',
  },
});
