import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {Image} from '@rneui/base';
import CustomModal from '@components/modal';

const Gallery = () => {
  const [imageUrl, setUrl] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

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
    <>
      <FlatList
        data={imageUrl}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => {
              setOpenModal(true);
              setSelectedImage(item);
            }}>
            <Image
              source={{
                uri: item,
              }}
              style={styles.image}
            />
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
      />

      <CustomModal openModal={openModal} closeModal={setOpenModal}>
        <Image
          source={{
            uri: selectedImage,
          }}
          style={styles.image}
        />
      </CustomModal>
    </>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  image: {
    height: 400,
  },
  imageContainer: {
    margin: 15,
    marginTop: 5,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 0.4,
  },
});
