import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {hasWaitePermission} from './waitePermission';
import CameraRoll from '@react-native-community/cameraroll';

export const captureImage = () => {
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: false,
  }).then(async image => {
    if (Platform.OS === 'android' && !(await hasWaitePermission())) {
      return;
    }

    CameraRoll.save(image.path, 'photo');
  });
};
