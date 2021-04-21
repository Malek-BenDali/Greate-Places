import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

const MapPreview = ({location, style, onPress}) => {
  let imagePreviewUrl;
  if (location)
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=35.83783783783784,10.646196969079817&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%35.83783783783784,10.646196969079817&key=NeedAnApi`;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.mapPreview, ...style}}>
      {console.log(location)}
      {location ? (
        <Image style={styles.mapImage} source={{uri: imagePreviewUrl}} />
      ) : (
        <Text>No Location choose yer !</Text>
      )}
    </TouchableOpacity>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  mapPreview: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
});
