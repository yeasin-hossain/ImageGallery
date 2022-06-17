import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {Image} from '@rneui/base';

const Gallery = () => {
  const [imageUrl, setUrl] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await CameraRoll.getPhotos({
        assetType: 'Photos',
        first: 10,
      });

      setUrl(result.edges.map(image => image.node.image.uri));
    })();
  }, []);

  return (
    <FlatList
      data={imageUrl}
      renderItem={({item}) => (
        <Image
          source={{
            uri: item,
          }}
          style={styles.image}
        />
      )}
      keyExtractor={item => item}
    />
  );
};

export default Gallery;

const styles = StyleSheet.create({
  image: {
    height: 400,
  },
});
