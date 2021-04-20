import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const MapPreview = ({location, style}) => {
  let imagePreviewUrl;
  if (location)
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%${location.lat},${location.lng}&key=AIzaSyB73-Revpjv47LMrW0sTS3qt56jCV4-92I`;

  return (
    <View style={{...styles.mapPreview, ...style}}>
      {console.log(location)}
      {location ? (
        <Image style={styles.mapImage} source={{uri: imagePreviewUrl}} />
      ) : (
        <Text>No Location choose yer !</Text>
      )}
    </View>
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
