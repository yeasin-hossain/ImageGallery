import {Button} from '@rneui/themed';
import {hasWaitePermission} from '@utility//waitePermission';
import React from 'react';
import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import CameraRoll from '@react-native-community/cameraroll';

const CaptureImage = () => {
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: false,
    }).then(async image => {
      console.log(image);
      if (Platform.OS === 'android' && !(await hasWaitePermission())) {
        return;
      }

      CameraRoll.save(image.path, 'photo');
    });
  };
  return (
    <Button onPress={openCamera} radius="md" color="success">
      Capture Image
    </Button>
  );
};

export default CaptureImage;
