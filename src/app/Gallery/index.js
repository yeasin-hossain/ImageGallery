import React, {useEffect, useState} from 'react';
import {Alert, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {Image} from '@rneui/base';
import CustomModal from '@components/modal';
import Pagination from '@components/Pagination';
import {getFromLocalStore} from '@utility//LocalStore';
import {hasWaitePermission} from '@utility//waitePermission';
import {useNavigation} from '@react-navigation/native';
import NotFound from '@components/NoFound';

const Gallery = () => {
  const navigation = useNavigation();

  const [imageUrls, setUrls] = useState([]);
  const [paginate, setPaginate] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    (async () => {
      if (!(await hasWaitePermission())) {
        Alert.alert('Permission is required');
        return;
      }

      const result = await CameraRoll.getPhotos({
        assetType: 'Photos',
        first: 10000,
      });
      const lastVisitPage = await getFromLocalStore('paginate');

      setUrls(result?.edges.map(image => image?.node?.image?.uri));
      setPaginate(lastVisitPage);
    })();
  }, [navigation]);

  return (
    <>
      <FlatList
        data={imageUrls.slice(paginate, paginate + 4)}
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
        ListEmptyComponent={<NotFound />}
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
      <Pagination
        paginate={paginate}
        setPaginate={setPaginate}
        dataLength={imageUrls.length}
      />
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
  nextPrev: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  paginationLabel: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
